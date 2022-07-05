const helpers={loud:function(t){return t.toUpperCase()}},abilitymodifier={3:"-3",4:"-2",5:"-2",6:"-1",7:"-1",8:"-1",9:"0",10:"0",11:"0",12:"0",13:"+1",14:"+1",15:"+1",16:"+2",17:"+2",18:"+3"},doLookup=t=>{const e=parseInt(t,10),i=Math.max(Math.min(e,18),3);return"number"==typeof e?abilitymodifier[i]:""},calculateAttributeModifier=t=>(["strength","dexterity","constitution","intelligence","wisdom","charisma"].forEach((e=>{const i=doLookup(t[e]);t[e+"Modifier"]=i})),t),hooks={updateValues:calculateAttributeModifier},partials={header:"<h1>{{title}}</h1>",baseStyle:"<style>\n    body {\n      margin: 0;\n      padding: 20px;\n    }\n\n    * {\n      outline: 1px solid red;\n    }\n  </style > "};
      let scripts = {}
      if (typeof hooks !== 'undefined') {
        scripts = { ...scripts, hooks: hooks }
      }
      if (typeof helpers !== 'undefined') {
        scripts = { ...scripts, helpers: helpers }
      }
      if (typeof partials !== 'undefined') {
        scripts = { ...scripts, partials: partials }
      }
      return scripts
    