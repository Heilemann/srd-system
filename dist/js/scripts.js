const helpers={loud:function(t){return t.toUpperCase()}},abilitymodifier={3:"-3",4:"-2",5:"-2",6:"-1",7:"-1",8:"-1",9:"0",10:"0",11:"0",12:"0",13:"+1",14:"+1",15:"+1",16:"+2",17:"+2",18:"+3"},doLookup=t=>{const e=parseInt(t,10),i=Math.max(Math.min(e,18),3);return"number"==typeof e?abilitymodifier[i]:""},calculateAttributeModifier=t=>{console.log("calculateAttributeModifier",t);return["strength","dexterity","constitution","intelligence","wisdom","charisma"].forEach((t=>{const e=calculateAttributeModifier(values[t]);values[t+"Modifier"]=e})),values},hooks={updateValues:calculateAttributeModifier},partials={header:"<h1>{{title}}</h1>"};
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
    