this["System"] = this["System"] || {};
this["System"]["templates"] = this["System"]["templates"] || {};
this["System"]["templates"]["character"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<style>\n  @media (prefers-color-scheme: dark) {\n    * {\n      color: white;\n    }\n\n    input,\n    button {\n      background-color: #333 !important;\n      color: white !important;\n    }\n  }\n\n  body {\n    padding: 20px;\n  }\n\n  h1 {\n    font-size: 18px;\n    text-transform: uppercase;\n    font-weight: 900;\n    line-height:\n      20px;\n    padding: 1px;\n    margin: 0;\n    text-align: center;\n  }\n\n  .subhead {\n    font-size:\n      11px;\n    background: black;\n    color: white;\n    text-align: center;\n    padding: 5px;\n    text-transform: uppercase;\n    font-weight: 400;\n  }\n\n  .hblock {\n    display: flex;\n    line-height: 20px;\n  }\n\n  .vblock {\n    display: flex;\n    line-height: 20px;\n    flex-direction: column;\n  }\n\n  .hblock>label,\n  .vblock>label {\n    background: black;\n    color: white;\n    text-transform: uppercase;\n    font-weight: bold;\n    letter-spacing:\n      -1px;\n    font-size: 13px;\n    padding: 5px 10px;\n    text-align: center;\n  }\n\n  .hblock>label {\n    width: 80px;\n  }\n\n  input {\n    width: 100%;\n  }\n\n  .hblock input,\n  .vblock input {\n    background: white;\n    flex: auto;\n    border: 1px solid black;\n    padding: 5px;\n    padding-right: 0;\n    margin: 0;\n  }\n\n  .hblock input {\n    width: 60%;\n  }\n\n  h2 {\n    /*\n  padding-left: 25px; */\n    position: relative;\n    /* font-size: 20px; */\n    font-size:\n      16px;\n    line-height: 30px;\n    overflow: hidden;\n    text-transform: uppercase;\n    margin-top: 15px;\n  }\n\n  /* h2:before { content: ' '; background: black; position:\n  absolute; height: 30px; width: 20px; left: 0px; } */\n  /* h2:after { content: '\n  '; background: black; position: absolute; height: 30px; width: 1000px;\n  margin-left: 5px; } */\n  .stack {\n    display: flex;\n    flex-direction: column;\n    gap:\n      5px;\n  }\n\n  .grid {\n    display: grid;\n    grid-column-gap: 5px;\n    grid-row-gap: 5px;\n    align-items: center;\n  }\n\n  .vitals {\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: auto repeat(4, 1fr);\n  }\n\n  .logo {\n    grid-area: 1 / 1 / 2 / 6;\n  }\n\n  .pcname {\n    grid-area: 2 / 1 / 3 / 6;\n  }\n\n  .alignment {\n    grid-area: 3 / 1 / 4 / 6;\n  }\n\n  .class {\n    grid-area: 4 / 1 / 5 / 4;\n  }\n\n  .level {\n    grid-area: 4 / 4 / 5 / 6;\n  }\n\n  .title {\n    grid-area: 5 / 1 / 6 / 4;\n  }\n\n  .hitdie {\n    grid-area: 5 / 4 / 6 / 6;\n  }\n\n  @media screen and (min-width: 400px) {\n    .vitals {\n      grid-template-columns:\n        repeat(5, 1fr);\n      grid-template-rows: repeat(3, 1fr);\n    }\n\n    .logo {\n      grid-area: 1 / 1 / 3 / 3;\n    }\n\n    .pcname {\n      grid-area: 1 / 3 / 2 / 6;\n    }\n\n    .class {\n      grid-area: 2 / 3 / 3 / 5;\n    }\n\n    .level {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n\n    .title {\n      grid-area: 3 / 3 / 4 / 5;\n    }\n\n    .hitdie {\n      grid-area: 3 / 5 / 4 / 6;\n    }\n\n    .alignment {\n      grid-area: 3 / 1 / 4 / 3;\n    }\n  }\n\n  .combat {\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    align-items: start;\n  }\n\n  .header {\n    grid-area: 1 / 1 / 2 / 2;\n  }\n\n  .left {\n    grid-area:\n      2 / 1 / 3 / 2;\n    display: flex;\n  }\n\n  .left input {\n    height: 94px;\n    text-align:\n      center;\n    padding-left: 0;\n    border-right: 0;\n  }\n\n  .left .vblock:last-child input {\n    border-right: 1px solid black;\n  }\n\n  .center {\n    grid-area: 3 / 1 / 4 / 3;\n    display:\n      flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  .right {\n    grid-area: 2 / 2 / 3 / 3;\n    /* display: flex; */\n  }\n\n  .right input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  @media screen and (min-width: 400px) {\n    .combat {\n      grid-template-columns:\n        repeat(3, 1fr);\n      grid-template-rows: auto;\n      align-items: start;\n    }\n\n    .header {\n      grid-area: 1 / 1 / 2 / 4;\n    }\n\n    .left {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .left input {\n      height: 89px;\n    }\n\n    .center {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .right {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n  }\n\n  .movement {\n    display: flex;\n    /* gap: 5px; */\n  }\n\n  .movement input {\n    width: 100%;\n  }\n\n  .movement .inlineblock {\n    border: 1px solid black;\n    border-right:\n      none;\n  }\n\n  .movement .inlineblock:last-child {\n    border-right: 1px solid black;\n  }\n\n  .movement .inlineblock input {\n    border: none;\n  }\n\n  .movement label {\n    text-transform: uppercase;\n    text-align: center;\n    font-size: 10px;\n    font-weight:\n      bold;\n  }\n\n  .movement input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  .inlineblock {\n    display: flex;\n    flex-direction: column-reverse;\n  }\n\n  @media screen and (min-width: 400px) {\n    .abilitiesetc {\n      grid-template-columns: repeat(3, 1fr);\n      grid-template-rows: auto;\n      align-items: start;\n    }\n  }\n\n  .attributes {\n    grid-template-columns: repeat(3,\n        1fr);\n    grid-template-rows: auto repeat(2, 1fr);\n  }\n\n  .attributes .header {\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .attributes .strength {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .attributes .intelligence {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .attributes .wisdom {\n    grid-area: 2 / 3 / 3 / 4;\n  }\n\n  .attributes .dexterity {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  .attributes .constitution {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  .attributes .charisma {\n    grid-area: 3 / 3 / 4 / 4;\n  }\n\n  @media screen and (min-width: 400px) {\n    .attributes {\n      grid-template-columns: repeat(6, 1fr);\n      grid-template-rows: auto repeat(1, 1fr);\n    }\n\n    .attributes .header {\n      grid-area: 1 / 1 / 2 / 7;\n    }\n\n    .attributes .strength {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .attributes .intelligence {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .attributes .wisdom {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n\n    .attributes .dexterity {\n      grid-area: 2 / 4 / 3 / 5;\n    }\n\n    .attributes .constitution {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n\n    .attributes .charisma {\n      grid-area:\n        2 / 6 / 3 / 7;\n    }\n  }\n\n  .attributes .vblock {\n    display: grid;\n    grid-template-columns:\n      repeat(2, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    border: 1px solid black;\n    border-top: 0;\n  }\n\n  .attributes input {\n    text-align: center;\n    border: none;\n    padding-left: 0;\n  }\n\n  .attributes .vblock label {\n    grid-area: 1 / 1 / 2 / 3;\n    padding-left: 0;\n    padding-right: 0;\n  }\n\n  .attributes .vblock input.value {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .attributes .vblock input.modifier {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .savingthrows {\n    grid-template-columns: repeat(3, 1fr);\n    grid-template-rows: auto repeat(1, 1fr);\n    align-items: start;\n  }\n\n  .savingthrows .header {\n    grid-area: 1 / 1 / 2 / 4;\n  }\n\n  .savingthrows .deathpoison {\n    grid-area:\n      2 / 1 / 3 / 2;\n  }\n\n  .savingthrows .magicwands {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .savingthrows .paralysispetrification {\n    grid-area: 2 / 3 / 3 / 4;\n  }\n\n  .savingthrows .breathattacks {\n    grid-area: 3 / 1 / 4 / 2;\n  }\n\n  .savingthrows .spellsrodsstaves {\n    grid-area: 3 / 2 / 4 / 3;\n  }\n\n  @media screen and (min-width: 400px) {\n    .savingthrows {\n      grid-template-columns: repeat(5, 1fr);\n    }\n\n    .savingthrows .header {\n      grid-area: 1 / 1 / 2 / 6;\n    }\n\n    .savingthrows .deathpoison {\n      grid-area: 2 / 1 / 3 / 2;\n    }\n\n    .savingthrows .magicwands {\n      grid-area: 2 / 2 / 3 / 3;\n    }\n\n    .savingthrows .paralysispetrification {\n      grid-area: 2 / 3 / 3 / 4;\n    }\n\n    .savingthrows .breathattacks {\n      grid-area: 2 / 4 / 3 / 5;\n    }\n\n    .savingthrows .spellsrodsstaves {\n      grid-area: 2 / 5 / 3 / 6;\n    }\n  }\n\n  .savingthrows input {\n    text-align: center;\n    padding-left: 0;\n  }\n\n  .treasure {\n    grid-template-columns:\n      repeat(5, 1fr);\n    grid-template-rows: auto repeat(1, 1fr);\n  }\n\n  .treasure .header {\n    grid-area: 1 / 1 / 2 / 6;\n  }\n\n  .treasure .platinum {\n    grid-area: 2 / 1 / 3 / 2;\n  }\n\n  .treasure .gold {\n    grid-area: 2 / 2 / 3 / 3;\n  }\n\n  .treasure .electrum {\n    grid-area:\n      2 / 3 / 3 / 4;\n  }\n\n  .treasure .silver {\n    grid-area: 2 / 4 / 3 / 5;\n  }\n\n  .treasure .copper {\n    grid-area: 2 / 5 / 3 / 6;\n  }\n\n  @media screen and (min-width: 400px) {\n    .treasure .vblock {\n      flex-direction: row;\n    }\n  }\n\n  .arrayItem {\n    display: flex;\n  }\n\n  .arrayItem>* {\n    flex: 0 0 auto;\n  }\n</style>\n\n\n<div class='vitals grid'>\n  <div class='logo'>\n    <h1>Old-School Essentials</h1>\n    <div class='subhead'>Retro Adventure Game</div>\n  </div>\n  <div class='pcname hblock'>\n    <label>PC</label>\n    <input placeholder='Name...' name='name' />\n  </div>\n  <div class='alignment hblock'>\n    <label>AL</label>\n    <input placeholder='Alignment...' name='alignment' />\n  </div>\n  <div class='class hblock'>\n    <label>Class</label>\n    <input placeholder='Class...' name='Class' />\n  </div>\n  <div class='level hblock'>\n    <label>LVL</label>\n    <input placeholder='Level...' name='level' />\n  </div>\n  <div class='title hblock'>\n    <label>Title</label>\n    <input placeholder='Title...' name='title' />\n  </div>\n  <div class='hitdie hblock'>\n    <label>HD</label>\n    <input placeholder='Hit Die...' name='hitdie' />\n  </div>\n</div>\n\n<div class='attributes grid'>\n  <div class='header'>\n    <h2>Ability Scores</h2>\n  </div>\n\n  <div class='strength vblock'>\n    <label>STR</label>\n    <input class='value' name='strength' placeholder='&mdash;' />\n    <input class='modifier' name='strengthModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"strengthModifier") || (depth0 != null ? lookupProperty(depth0,"strengthModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strengthModifier","hash":{},"data":data,"loc":{"start":{"line":562,"column":65},"end":{"line":562,"column":85}}}) : helper)))
    + "' />\n  </div>\n\n  <div class='intelligence vblock'>\n    <label>INT</label>\n    <input class='value' name='intelligence' placeholder='&mdash;' />\n    <input class='modifier' name='intelligenceModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"intelligenceModifier") || (depth0 != null ? lookupProperty(depth0,"intelligenceModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intelligenceModifier","hash":{},"data":data,"loc":{"start":{"line":568,"column":69},"end":{"line":568,"column":93}}}) : helper)))
    + "' />\n  </div>\n\n  <div class='wisdom vblock'>\n    <label>WIS</label>\n    <input class='value' name='wisdom' placeholder='&mdash;' />\n    <input class='modifier' name='wisdomModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"wisdomModifier") || (depth0 != null ? lookupProperty(depth0,"wisdomModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wisdomModifier","hash":{},"data":data,"loc":{"start":{"line":574,"column":63},"end":{"line":574,"column":81}}}) : helper)))
    + "' />\n  </div>\n\n  <div class='dexterity vblock'>\n    <label>DEX</label>\n    <input class='value' name='dexterity' placeholder='&mdash;' />\n    <input class='modifier' name='dexterityModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"dexterityModifier") || (depth0 != null ? lookupProperty(depth0,"dexterityModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dexterityModifier","hash":{},"data":data,"loc":{"start":{"line":580,"column":66},"end":{"line":580,"column":87}}}) : helper)))
    + "' />\n  </div>\n\n  <div class='constitution vblock'>\n    <label>CON</label>\n    <input class='value' name='constitution' placeholder='&mdash;' />\n    <input class='modifier' name='constitutionModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"constitutionModifier") || (depth0 != null ? lookupProperty(depth0,"constitutionModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"constitutionModifier","hash":{},"data":data,"loc":{"start":{"line":586,"column":69},"end":{"line":586,"column":93}}}) : helper)))
    + "' />\n  </div>\n\n  <div class='charisma vblock'>\n    <label>CHA</label>\n    <input class='value' name='charisma' placeholder='&mdash;' />\n    <input class='modifier' name='charismaModifier' placeholder='"
    + alias4(((helper = (helper = lookupProperty(helpers,"charismaModifier") || (depth0 != null ? lookupProperty(depth0,"charismaModifier") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"charismaModifier","hash":{},"data":data,"loc":{"start":{"line":592,"column":65},"end":{"line":592,"column":85}}}) : helper)))
    + "' />\n  </div>\n</div>\n\n\n<script>\n  const derp = 'HELLO!'\n</script>\n\n<script>\n  document.querySelector('#resetToken').addEventListener('click', function () {\n    console.log(derp)\n    document.querySelector('*[name=\"token\"]').value = derp\n  });\n</script>\n\n<!-- <div>"
    + alias4((lookupProperty(helpers,"asset")||(depth0 && lookupProperty(depth0,"asset"))||alias2).call(alias1,(depth0 != null ? lookupProperty(depth0,"token") : depth0),{"name":"asset","hash":{},"data":data,"loc":{"start":{"line":608,"column":10},"end":{"line":608,"column":25}}}))
    + "</div> -->\n\n<asset name=\"token\"></asset>\n<asset name=\"portrait\" />\n\n<div class='combat grid'>\n  <div class='header'>\n    <h2>Combat</h2>\n  </div>\n  <div class='left'>\n    <div class='vblock'>\n      <label>HP</label>\n      <input name='hitpoints' placeholder='&mdash;' />\n    </div>\n    <div class='vblock'>\n      <label>Max</label>\n      <input name='maxhitpoints' placeholder='&mdash;' />\n    </div>\n  </div>\n  <div class='center'>\n    <div class='hblock'>\n      <label>Init</label>\n      <input name='initiative' placeholder='Initiative...' />\n    </div>\n    <div class='vblock'>\n      <label>Movement</label>\n      <div class='movement'>\n        <div class='inlineblock'>\n          <label for='move-encounter'>En</label>\n          <input name='move-encounter' placeholder='&mdash;' />\n        </div>\n        <div class='inlineblock'>\n          <label for='move-exploration'>Ex</label>\n          <input name='move-exploration' placeholder='&mdash;' />\n        </div>\n        <div class='inlineblock'>\n          <label for='move-overland'>Ov</label>\n          <input name='move-overland' placeholder='&mdash;' />\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class='right'>\n    <div class='vblock'>\n      <label>AC</label>\n      <input name='ac' placeholder='&mdash;' />\n    </div>\n    <div class='vblock'>\n      <label>Unarmored</label>\n      <input name='unarmoredac' placeholder='&mdash;' />\n    </div>\n  </div>\n</div>\n\n<div class='abilitiesetc grid'>\n  <div class='abilities'>\n    <div class='header'>\n      <h2>Abilities</h2>\n    </div>\n    <div arrayname='abilities' accepts='abilities' class='array'>\n      <div class='arrayItem'>\n        <button name='remove'>-</button>\n        <input type='hidden' name='documentId' />\n        <input name='name' />\n      </div>\n    </div>\n  </div>\n  <div class='skills'>\n    <div class='header'>\n      <h2>Skills</h2>\n    </div>\n\n    <div arrayname='skills' accepts='skills' class=\"array\">\n      <div class=\"arrayItem\">\n        <button name='remove'>-</button>\n        <input type='hidden' name='documentId' />\n        <input name='name' />\n      </div>\n    </div>\n  </div>\n  <div class='weapons'>\n    <div class='header'>\n      <h2>Weapons</h2>\n    </div>\n\n    <div arrayname='weapons' accepts='weapons' class=\"array\">\n      <div class=\"arrayItem\">\n        <button name='remove'>-</button>\n        <input type='hidden' name='documentId' />\n        <input name='name' />\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class='savingthrows grid'>\n  <div class='header'>\n    <h2>Saving Throws</h2>\n  </div>\n\n  <div class='deathpoison vblock'>\n    <label>Death, Poison</label>\n    <input name='deathpoison' placeholder='&mdash;' />\n  </div>\n  <div class='magicwands vblock'>\n    <label>Magic Wands</label>\n    <input name='magicwands' placeholder='&mdash;' />\n  </div>\n  <div class='paralysispetrification vblock'>\n    <label>Paralysis, Petrif.</label>\n    <input name='paralysispetrification' placeholder='&mdash;' />\n  </div>\n  <div class='breathattacks vblock'>\n    <label>Breath Attacks</label>\n    <input name='breathattacks' placeholder='&mdash;' />\n  </div>\n  <div class='spellsrodsstaves vblock'>\n    <label>Spells, Rods, Staves</label>\n    <input name='spellsrodsstaves' placeholder='&mdash;' />\n  </div>\n</div>\n\n<div class='treasure grid'>\n  <div class='header'>\n    <h2>Treasure</h2>\n  </div>\n\n  <div class='platinum vblock'>\n    <label>PP</label>\n    <input name='platinum' placeholder='&mdash;' />\n  </div>\n  <div class='gold vblock'>\n    <label>GP</label>\n    <input name='gold' placeholder='&mdash;' />\n  </div>\n  <div class='electrum vblock'>\n    <label>EP</label>\n    <input name='electrum' placeholder='&mdash;' />\n  </div>\n  <div class='silver vblock'>\n    <label>SP</label>\n    <input name='silver' placeholder='&mdash;' />\n  </div>\n  <div class='copper vblock'>\n    <label>CP</label>\n    <input name='copper' placeholder='&mdash;' />\n  </div>\n</div>\n\n<div class='equipment'>\n  <div class='header'>\n    <h2>Equipment</h2>\n  </div>\n  <div arrayname='equipment' accepts='equipment' class=\"array\">\n    <div class=\"arrayItem\">\n      <button name='remove'>-</button>\n      <input type='hidden' name='documentId' />\n      <input name='name' />\n    </div>\n  </div>\n</div>\n\n<div class='experience grid'></div>";
},"useData":true});
this["System"]["templates"]["equipment"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script>\n  function drag(e) { const { type, id } = e.target.dataset\n  e.dataTransfer.setData(type, id) }\n</script>\n\n<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='weight'>Weight:</label>\n  <input name='weight' />\n</p>";
},"useData":true});
this["System"]["templates"]["spell"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='description'>Description:</label>\n  <input name='description' />\n</p>";
},"useData":true});
this["System"]["templates"]["weapon"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<script>\n  function drag(e) { const { type, id } = e.target.dataset\n  e.dataTransfer.setData(type, id) }\n</script>\n\n<p>\n  <label for='name'>Name:</label>\n  <input name='name' />\n</p>\n\n<p>\n  <label for='weight'>Weight:</label>\n  <input name='weight' />\n</p>";
},"useData":true});
this["System"]["templates"]["attribute"] = Handlebars.template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "Attribute part";
},"useData":true});return System.templates