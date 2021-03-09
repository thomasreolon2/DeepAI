<div id="logic">
  <category name="%{BKY_CATEGORY_LOGIC}" colour="%{BKY_LOGIC_HUE}">
    
    <block type="controls_if">
      <value name="IF0">
        <shadow type="indata">
          <field name="indata1">True</field>
        </shadow>
      </value>
    </block>


    <block type="controls_ifelse">
      <value name="IF0">
        <shadow type="indata">
          <field name="indata1">True</field>
        </shadow>
      </value>
    </block>


    <block type="logic_compare">
      <value name="A">
        <shadow type="indata">
          <field name="indata1">0</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="indata">
          <field name="indata1">0</field>
        </shadow>
      </value>
    </block>


    <block type="logic_operation">
      <value name="A">
        <shadow type="indata">
          <field name="indata1">True</field>
        </shadow>
      </value>
      <value name="B">
        <shadow type="indata">
          <field name="indata1">True</field>
        </shadow>
      </value>
    </block>


    <block type="logic_negate">
      <value name="BOOL">
        <shadow type="indata">
          <field name="indata1">True</field>
        </shadow>
      </value>
    </block>


    <block type="logic_boolean"></block>
    
 
    <block type="logic_null"></block>

    <block type="logic_ternary">
      <value name="THEN">
        <shadow type="indata">
          <field name="indata1">True리턴</field>
        </shadow>
      </value>
      <value name="IF">
        <shadow type="indata">
          <field name="indata1">조건</field>
        </shadow>
      </value>
      <value name="ELSE">
        <shadow type="indata">
          <field name="indata1">False리턴</field>
        </shadow>
      </value>
    </block>


   <block type="try_except">
        <value name="EXCEPT1">
            <block type="except_block"></block>
        </value>
      </block> 

      <block type="try_except1">
        <value name="EXCEPT1">
            <block type="except_block"></block>
        </value>
      </block>

      <block type = "m1">
        <value name="IF0">
          <block type="except_block"></block>
        </value>
      </block>
    </category>
</div>