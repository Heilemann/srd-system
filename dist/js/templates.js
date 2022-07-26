this["System"] = this["System"] || {};
this["System"]["templates"] = this["System"]["templates"] || {};
this["System"]["templates"]["character"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sendMessage"),depth0,{"name":"sendMessage","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<style>\n  .subhead {\n    font-size: 11px;\n    background: #111;\n    color: white;\n    text-align: center;\n    padding: 5px;\n    text-transform: uppercase;\n    font-weight: 400;\n  }\n\n  .hblock {\n    display: flex;\n    line-height: 20px;\n  }\n\n  .vblock {\n    display: flex;\n    line-height: 20px;\n    flex-direction: column;\n  }\n\n  .hblock>label,\n  .vblock>label {\n    background: #111;\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    letter-spacing:\n      -1px;\n    font-size: 13px;\n    padding: 5px 10px;\n    text-align: center;\n  }\n\n  .hblock>label {\n    width: 80px;\n  }\n\n  .hblock input,\n  .vblock input {\n    background: white;\n    flex: auto;\n    border: 1px solid #111;\n    padding: 5px;\n    padding-right: 0;\n    margin: 0;\n  }\n\n  .hblock input {\n    width: 60%;\n  }\n\n  /* h2:before { content: ' '; background: #111; position:\n  absolute; height: 30px; width: 20px; left: 0px; } */\n  /* h2:after { content: '\n  '; background: #111; position: absolute; height: 30px; width: 1000px;\n  margin-left: 5px; } */\n  .stack {\n    display: flex;\n    flex-direction: column;\n    gap:\n      5px;\n  }\n\n  .vitals {\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: auto repeat(4, 1fr);\n  }\n\n  .logo {\n    grid-area: 1 / 1 / 2 / 6;\n  }\n\n  .pcname {\n    grid-area: 2 / 1 / 3 / 6;\n  }\n\n  .alignment {\n    grid-area: 3 / 1 / 4 / 6;\n  }\n\n  .class {\n    grid-area: 4 / 1 / 5 / 4;\n  }\n\n  .level {\n    grid-area: 4 / 4 / 5 / 6;\n  }\n\n  .title {\n    grid-area: 5 / 1 / 6 / 4;\n  }\n\n  .hitdie {\n    grid-area: 5 / 4 / 6 / 6;\n  }\n\n  @media screen and (min-width: 400px) {\n    .vitals {\n      grid-template-columns:\n        repeat(5, 1fr);\n      grid-template-rows: repeat(3, 1fr);\n    }\n\n    .logo {\n      grid-area: 1 / 1 / 3 / 3;\n    }\n\n    .pcname {\n      grid-area: 1 / 3 / 2 / 6;\n    }\n\n    .class {\n      grid-area: 2 / 3 / 3 / 5;\n    }\n\n    .level {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n\n    .title {\n      grid-area: 3 / 3 / 4 / 5;\n    }\n\n    .hitdie {\n      grid-area: 3 / 5 / 4 / 6;\n    }\n\n    .alignment {\n      grid-area: 4 / 3 / 6 / 6;\n    }\n  }\n\n  .combat {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    align-items: start;\n  }\n\n  .header {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  .left {\n    grid-area:\n      2 / 1 / 3 / 2;\n    display: flex;\n  }\n\n  .left input {\n    height: 94px;\n    text-align:\n      center;\n    padding-left: 0;\n    border-right: 0;\n  }\n\n  .left .vblock:last-child input {\n    border-right: 1px solid #111;\n  }\n\n  .center {\n    grid-area: 3 / 1 / 4 / 3;\n    display:\n      flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  .right {\n    grid-area: 2 / 2 / 3 / 3;\n    /* display: flex; */\n  }\n\n  .right input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  @media screen and (min-width: 400px) {\n    .combat {\n      grid-template-columns:\n        repeat(3, 1fr);\n      grid-template-rows: auto;\n      align-items: start;\n    }\n\n    .header {\n      grid-area: 1 / 1 / 2 / 4;\n    }\n\n    .left {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .left input {\n      height: 89px;\n    }\n\n    .center {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .right {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n  }\n\n  .movement {\n    display: flex;\n    /* gap: 5px; */\n  }\n\n  .movement input {\n    width: 100%;\n  }\n\n  .movement .inlineblock {\n    border: 1px solid #111;\n    border-right:\n      none;\n  }\n\n  .movement .inlineblock:last-child {\n    border-right: 1px solid #111;\n  }\n\n  .movement .inlineblock input {\n    border: none;\n  }\n\n  .movement label {\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 10px;\n    font-weight:\n      bold;\n  }\n\n  .movement input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  .inlineblock {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (min-width: 400px) {\n    .abilitiesetc {\n      grid-template-columns: repeat(3, 1fr);\n      grid-template-rows: auto;\n      align-items: start;\n    }\n  }\n\n  .attributes {\n    grid-template-columns: repeat(3,\n        1fr);\n    grid-template-rows: auto repeat(2, 1fr);\n  }\n\n  .attributes .header {\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .attributes .strength {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .attributes .intelligence {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .attributes .wisdom {\n    grid-area: 2 / 3 / 3 / 4;\n  }\n\n  .attributes .dexterity {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  .attributes .constitution {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  .attributes .charisma {\n    grid-area: 3 / 3 / 4 / 4;\n  }\n\n  @media screen and (min-width: 400px) {\n    .attributes {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: auto repeat(1, 1fr);\n    }\n\n    .attributes .header {\n      grid-area: 1 / 1 / 2 / 7;\n    }\n\n    .attributes .strength {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .attributes .intelligence {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .attributes .wisdom {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n\n    .attributes .dexterity {\n      grid-area: 2 / 4 / 3 / 5;\n    }\n\n    .attributes .constitution {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n\n    .attributes .charisma {\n      grid-area:\n        2 / 6 / 3 / 7;\n    }\n  }\n\n  .attributes .vblock {\n    display: grid;\n    grid-template-columns:\n      repeat(3, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    border: 1px solid #111;\n    border-top: 0;\n  }\n\n  .attributes input {\n    text-align: center;\n    border: none;\n    padding-left: 0;\n  }\n\n  .attributes .vblock label {\n    grid-area: 1 / 1 / 3 / 4;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .attributes .vblock input.value {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .attributes .vblock input.modifier {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .savingthrows {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto repeat(1, 1fr);\n    align-items: start;\n  }\n\n  .savingthrows .header {\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .savingthrows .deathpoison {\n    grid-area:\n      2 / 1 / 3 / 2;\n  }\n\n  .savingthrows .magicwands {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .savingthrows .paralysispetrification {\n    grid-area: 2 / 3 / 3 / 4;\n  }\n\n  .savingthrows .breathattacks {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  .savingthrows .spellsrodsstaves {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  @media screen and (min-width: 400px) {\n    .savingthrows {\n      grid-template-columns: repeat(5, 1fr);\n    }\n\n    .savingthrows .header {\n      grid-area: 1 / 1 / 2 / 6;\n    }\n\n    .savingthrows .deathpoison {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .savingthrows .magicwands {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .savingthrows .paralysispetrification {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n\n    .savingthrows .breathattacks {\n      grid-area: 2 / 4 / 3 / 5;\n    }\n\n    .savingthrows .spellsrodsstaves {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n  }\n\n  .savingthrows input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  .treasure {\n    grid-template-columns:\n      repeat(5, 1fr);\n    grid-template-rows: auto repeat(1, 1fr);\n  }\n\n  .treasure .header {\n    grid-area: 1 / 1 / 2 / 6;\n  }\n\n  .treasure .platinum {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .treasure .gold {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .treasure .electrum {\n    grid-area:\n      2 / 3 / 3 / 4;\n  }\n\n  .treasure .silver {\n    grid-area: 2 / 4 / 3 / 5;\n  }\n\n  .treasure .copper {\n    grid-area: 2 / 5 / 3 / 6;\n  }\n\n  .arrayItem {\n    display: flex;\n  }\n\n  .arrayItem>* {\n    flex: 0 0 auto;\n  }\n\n  .attributes button.rollButton {\n    grid-area: 2 / 3 / 2 / 4;\n  }\n</style>\n\n\n<div class='vitals grid'>\n  <div class='logo'>\n    <h1>Old-School Essentials</h1>\n    <div class='subhead'>Retro Adventure Game</div>\n  </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"Name...","name":"name","label":"PC"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"Alignment...","name":"alignment","label":"AL"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"Class...","name":"class","label":"Class"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"level","label":"LVL"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"Title...","name":"title","label":"Title"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"Hit Die...","name":"hitdie","label":"HD"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"token-and-portrait"),depth0,{"name":"token-and-portrait","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<div class='attributes grid'>\n  <div class='header'>\n    <h2>Ability Scores</h2>\n  </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"strengthModifier") : depth0),"modifierName":"strengthModifier","placeholder":"&mdash;","name":"strength","label":"STR"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"intelligenceModifier") : depth0),"modifierName":"intelligenceModifier","placeholder":"&mdash;","name":"intelligence","label":"INT"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"wisdomModifier") : depth0),"modifierName":"wisdomModifier","placeholder":"&mdash;","name":"wisdom","label":"WIS"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"dexterityModifier") : depth0),"modifierName":"dexterityModifier","placeholder":"&mdash;","name":"dexterity","label":"DEX"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"constitutionModifier") : depth0),"modifierName":"constitutionModifier","placeholder":"&mdash;","name":"constitution","label":"CON"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"attribute"),depth0,{"name":"attribute","hash":{"modifierValue":(depth0 != null ? lookupProperty(depth0,"charismaModifier") : depth0),"modifierName":"charismaModifier","placeholder":"&mdash;","name":"charisma","label":"CHA"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class='combat grid'>\n  <div class='header'>\n    <h2>Combat</h2>\n  </div>\n  <div class='left'>\n    <div class='vblock'>\n      <label>HP</label>\n      <input name='hitpoints' placeholder='&mdash;' />\n    </div>\n    <div class='vblock'>\n      <label>Max</label>\n      <input name='maxhitpoints' placeholder='&mdash;' />\n    </div>\n  </div>\n  <div class='center'>\n    <div class='hblock'>\n      <label>Init</label>\n      <input name='initiative' placeholder='Initiative...' />\n    </div>\n    <div class='vblock'>\n      <label>Movement</label>\n      <div class='movement'>\n        <div class='inlineblock'>\n          <label for='move-encounter'>En</label>\n          <input name='move-encounter' placeholder='&mdash;' />\n        </div>\n        <div class='inlineblock'>\n          <label for='move-exploration'>Ex</label>\n          <input name='move-exploration' placeholder='&mdash;' />\n        </div>\n        <div class='inlineblock'>\n          <label for='move-overland'>Ov</label>\n          <input name='move-overland' placeholder='&mdash;' />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class='right'>\n    <div class='vblock'>\n      <label>AC</label>\n      <input name='ac' placeholder='&mdash;' />\n    </div>\n    <div class='vblock'>\n      <label>Unarmored</label>\n      <input name='unarmoredac' placeholder='&mdash;' />\n    </div>\n  </div>\n</div>\n\n<div class='abilitiesetc grid'>\n  <div class='abilities'>\n    <div class='header'>\n      <h2>Abilities</h2>\n    </div>\n    <array arrayname='abilities' accepts='abilities' class='array'>\n      <div class='arrayItem'>\n        <button name='remove'>-</button>\n        <input name='name' />\n      </div>\n    </array>\n  </div>\n\n  <div class='skills'>\n    <div class='header'>\n      <h2>Skills</h2>\n    </div>\n    <array arrayname='skills' accepts='skills' class=\"array\">\n      <div class=\"arrayItem\">\n        <button name='remove'>-</button>\n        <input name='name' />\n      </div>\n    </array>\n  </div>\n\n  <div class='weapons'>\n    <div class='header'>\n      <h2>Weapons</h2>\n    </div>\n    <array arrayname='weapons' accepts='weapons' class=\"array\">\n      <div class=\"arrayItem\">\n        <button name='remove'>-</button>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"character-weapon"),depth0,{"name":"character-weapon","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "      </div>\n    </array>\n  </div>\n</div>\n\n<div class='savingthrows grid'>\n  <div class='header'>\n    <h2>Saving Throws</h2>\n  </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"vfield"),depth0,{"name":"vfield","hash":{"placeholder":"0","name":"deathPoison","label":"Death, Poison"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"vfield"),depth0,{"name":"vfield","hash":{"placeholder":"0","name":"wands","label":"Wands"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"vfield"),depth0,{"name":"vfield","hash":{"placeholder":"0","name":"paralysis","label":"Paralysis, Petrification"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"vfield"),depth0,{"name":"vfield","hash":{"placeholder":"0","name":"breath","label":"Breath"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"vfield"),depth0,{"name":"vfield","hash":{"placeholder":"0","name":"spells","label":"Spells, Rods, Staves"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "</div>\n\n<div class='treasure grid'>\n  <div class='header'>\n    <h2>Treasure</h2>\n  </div>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"platinum","label":"PP"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"gold","label":"GP"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"electrum","label":"EP"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"silver","label":"SP"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"hfield"),depth0,{"name":"hfield","hash":{"placeholder":"0","name":"copper","label":"CP"},"data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n</div>\n\n<div class='equipment'>\n  <div class='header'>\n    <h2>Equipment</h2>\n  </div>\n  <array arrayname='equipment' accepts='equipment' class=\"array\">\n    <div class=\"arrayItem\">\n      <button name='remove'>-</button>\n      <input name='name' />\n    </div>\n  </array>\n</div>\n\n<div class='experience grid'></div>";
},"usePartial":true,"useData":true});
this["System"]["templates"]["equipment"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<script>\n  function drag(e) {\n    const { type, id } = e.target.dataset\n    e.dataTransfer.setData(type, id)\n  }\n</script>\n\n<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='weight'>Weight:</label>\n  <input name='weight' />\n</p>";
},"usePartial":true,"useData":true});
this["System"]["templates"]["npc"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='description'>Description:</label>\n  <input name='description' />\n</p>";
},"usePartial":true,"useData":true});
this["System"]["templates"]["scene"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"mapId") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":92,"column":2},"end":{"line":100,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "    <p>\n      <label for=\"coverRadio\">Show Cover</label>\n      <input type=\"radio\" id=\"coverRadio\" name=\"showMap\" value=false />\n\n      <label for=\"mapRadio\">Show Map</label>\n      <input type=\"radio\" id=\"mapRadio\" name=\"showMap\" value=true />\n    </p>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<script>\n  let sendMessage = (message) => {\n    window.top.postMessage(\n      {\n        source: 'Frame',\n        id: '123',\n        message: 'setScene',\n        data: message\n      },\n      'http://localhost:3000'\n    )\n  }\n</script>\n\n<style>\n  @media screen and (min-width: 400px) {\n    #media {\n      display: flex;\n    }\n\n    #media>* {\n      flex: 1 1 0px;\n    }\n\n    #media>*:first-child {\n      margin-right: 10px;\n    }\n  }\n</style>\n\n<p style=\"margin-top: 0\">\n  <button onClick=\"() => { sendMessage({ sceneId: '"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":34,"column":51},"end":{"line":34,"column":57}}}) : helper)))
    + "' }) }\">Play</button>\n  <button onClick=\"() => { sendMessage({ sceneId: '"
    + alias4(((helper = (helper = lookupProperty(helpers,"id") || (depth0 != null ? lookupProperty(depth0,"id") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data,"loc":{"start":{"line":35,"column":51},"end":{"line":35,"column":57}}}) : helper)))
    + "' }) }\">Preview</button>\n</p>\n\n<h2>Information</h2>\n\n<p style=\"display: flex\">\n  <label for=\"name\" style=\"flex: 0 0 30%;\">Name</label>\n  <span style=\"flex: 0 0 70%\">\n    <input type=\"text\" placeholder=\"Scene Name...\" name=\"name\" />\n  </span>\n</p>\n\n<p style=\"display: flex\">\n  <label for=\"name\" style=\"flex: 0 0 30%;\">Subtitle</label>\n  <span style=\"flex: 0 0 70%\">\n    <input type=\"text\" placeholder=\"Subtitle...\" name=\"subtitle\" />\n  </span>\n</p>\n\n<p style=\"display: flex\">\n  <label for=\"name\" style=\"flex: 0 0 30%;\">Secret</label>\n  <span style=\"flex: 0 0 70%\">\n    <input type=\"checkbox\" name=\"nameIsSecret\" />\n  </span>\n</p>\n\n\n<h2>Media</h2>\n\n<p style=\"display: flex\">\n  <label style=\"flex: 0 0 30%\">Show</label>\n\n  <span class=\"tabs\">\n    <input type=\"radio\" id=\"coverRadio\" name=\"showMap\" value=false />\n    <label for=\"coverRadio\">Cover</label>\n\n    <input type=\"radio\" id=\"mapRadio\" name=\"showMap\" value=true />\n    <label for=\"mapRadio\">Map</label>\n  </span>\n</p>\n\n<div style=\"display: flex; margin-top: 10px;\">\n  <label for=\"coverId\" style=\"flex: 0 0 30%;\">Cover</label>\n  <asset name=\"coverId\" style=\"flex: 0 0 70%;\"></asset>\n</div>\n\n<div style=\"display: flex; margin-top: 10px;\">\n  <label for=\"mapId\" style=\"flex: 0 0 30%;\">Map</label>\n  <asset name=\"mapId\" style=\"flex: 0 0 70%;\"></asset>\n</div>\n\n\n"
    + ((stack1 = lookupProperty(helpers,"if").call(alias1,(depth0 != null ? lookupProperty(depth0,"coverId") : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":91,"column":0},"end":{"line":101,"column":7}}})) != null ? stack1 : "")
    + "\n<h2>Grid</h2>\n\n<div style=\"display: flex; margin-bottom: 10px; margin-top: 10px;\">\n  <div style=\"margin-right: 10px\">\n    <label for=\"grid\">Size</label><br />\n    <input type=\"number\" name=\"grid.size\" placeholder=\"10\" style=\"width: 100%\" />\n  </div>\n\n  <div style=\"margin-right: 10px\">\n    <label for=\"map\">X</label><br />\n    <input type=\"number\" name=\"grid.x\" placeholder=\"0\" style=\"width: 100%\" />\n  </div>\n\n  <div style=\"margin-right: 10px;\">\n    <label for=\"map\">Y</label><br />\n    <input type=\"number\" name=\"grid.y\" placeholder=\"0\" style=\"width: 100%\" />\n  </div>\n\n  <div style=\"margin-right: 10px;\">\n    <label for=\"map\">Color</label>\n    <input type=\"color\" id=\"color\" name=\"grid.color\" value=\"#ff0000\" style=\"width: 100%\" />\n  </div>\n\n  <div>\n    <label for=\"map\">Alpha</label>\n    <input type='number' name=\"grid.opacity\" min=\"0\" max=\"1\" step=\"0.01\" placeholder=\"1\" style=\"width: 100%\" />\n  </div>\n</div>\n\n<h2>Notes</h2>\n\n<p>\n  <textarea placeholder=\"Private scene notes...\" name=\"notes\"></textarea>\n</p>";
},"usePartial":true,"useData":true});
this["System"]["templates"]["spell"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='description'>Description:</label>\n  <input name='description' />\n</p>";
},"usePartial":true,"useData":true});
this["System"]["templates"]["weapon"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = container.invokePartial(lookupProperty(partials,"system-style"),depth0,{"name":"system-style","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(lookupProperty(partials,"sendMessage"),depth0,{"name":"sendMessage","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<script>\n  function drag(e) {\n    const { type, id } = e.target.dataset\n    e.dataTransfer.setData(type, id)\n  }\n</script>\n\n<p>\n  <label for='name'>Name:</label>\n  <input type=\"text\" name='name' />\n</p>\n\n<p>\n  <label for='damage'>Damage:</label>\n  <input type=\"text\" name='damage' />\n  <button onclick=\"() => {\n    sendMessage('/r "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"damage") || (depth0 != null ? lookupProperty(depth0,"damage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"damage","hash":{},"data":data,"loc":{"start":{"line":20,"column":20},"end":{"line":20,"column":30}}}) : helper)))
    + "')\n  }\">Roll</button>\n</p>\n\n<p>\n  <label for='qualities'>Qualities:</label>\n  <input type=\"text\" name='qualities' />\n</p>\n\n<p>\n  <label for='weight'>Weight:</label>\n  <input type=\"text\" name='weight' />\n</p>";
},"usePartial":true,"useData":true});return System.templates