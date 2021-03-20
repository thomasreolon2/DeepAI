// LTI - TP 정리(nodeJS) //
// TP로 설정된 앱은 TC의 공유 키, 암호를 사용하여 OAuth로 서명 될 데이터와 함께 
// POST request를 받음...

console.log('tttttttttttt')
'use strict';
const lti = require('ims-lti');
// MemoryStore shouldn't be used in production. Timestamps must be valid within a 5 minute grace period.
const nonceStore = new lti.Stores.MemoryStore();
// secrets should be stored securely in a production app
const secrets = {
  demo: 'xzc342AScx',
  demo2: 'dh43fvL-ew'
};

const getSecret = (consumerKey, callback) => {
  const secret = secrets[consumerKey];
  if (secret) {
    return callback(null, secret);
  }

  let err = new Error(`Unknown consumer ${consumerKey}`);
  err.status = 403;

  return callback(err);
};

exports.handleLaunch = (req, res, next) => {
  if (!req.body) {
    let err = new Error('Expected a body');
    err.status = 400;
    return next(err);
  }

  // POST request를 통해 oauth_consumer_key키를 통해서, oauth_consumer_secret을 찾을 수 있다.
  const consumerKey = req.body.oauth_consumer_key;
  if (!consumerKey) {
    let err = new Error('Expected a consumer');
    err.status = 422;
    return next(err);
  }

  // 이 부분이 consumer_key를 통해서 secret 얻는 함수
  getSecret(consumerKey, (err, consumerSecret) => {
    if (err) {
      return next(err);
    }

    // 그렇게 얻은 key와 secret 그리고, signautre_method에 의해 oatuh서명 확인 됨.
    const provider = new lti.Provider(consumerKey, consumerSecret, nonceStore, lti.HMAC_SHA1);

    // isvalid는 request가 LTI request이고, 올바른 서명이면 true 리턴
    provider.valid_request(req, (err, isValid) => {
      if (err) {
        return next(err);
      }
      // LTI request와 서명이 확인 된 경우
      if (isValid) {
        req.session.regenerate(err => {
          if (err) next(err);
          // provider.username 등 provider.body를 통해서 요청 데이터에 엑세스 가능.
          req.session.email = provider.body.lis_person_contact_email_primary;
          req.session.contextId = provider.context_id;
          req.session.userId = provider.userId;
          req.session.username = provider.username;
          req.session.ltiConsumer = provider.body.tool_consumer_instance_guid;
          req.session.isTutor = provider.instructor === true;
          req.session.context_id = provider.context_id;

          return res.redirect(301, '/application');
        });
      } else {
        return next(err);
      }
    });
  });
};
