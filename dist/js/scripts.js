const helpers={loud:function(e){return e.toUpperCase()}},abilitymodifier={3:"-3",4:"-2",5:"-2",6:"-1",7:"-1",8:"-1",9:"0",10:"0",11:"0",12:"0",13:"+1",14:"+1",15:"+1",16:"+2",17:"+2",18:"+3"},doLookup=e=>{const t=parseInt(e,10);Math.max(Math.min(t,18),3);return"number"==typeof t?abilitymodifier[t]:""},calculateAttributeModifier=e=>{console.log("calculateAttributeModifier",e);return["strength","dexterity","constitution","intelligence","wisdom","charisma"].forEach((e=>{const t=calculateAttributeModifier(values[e]);values[e+"Modifier"]=t})),values},hooks={beforeUpdateValues:calculateAttributeModifier},partials={header:"<h1>{{title}}</h1>"};
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
    