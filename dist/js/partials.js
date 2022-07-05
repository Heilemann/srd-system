const partials = {
    "/qwe": "This is the 'qwe' partial",
    "/system-style": "<style>* {color: black;}input,button {background-color: white !important;color: black !important;}@media (prefers-color-scheme: dark) {* {color: white;}input,button {background-color: #333 !important;color: white !important;}}body {margin: 0;padding: 20px;}h1 {font-size: 18px;text-transform: uppercase;font-weight: 900;line-height:20px;padding: 1px;margin: 0;text-align: center;}input {width: 100%;}h2 {/*padding-left: 25px; */position: relative;/* font-size: 20px; */font-size:16px;line-height: 30px;overflow: hidden;text-transform: uppercase;margin-top: 15px;}.grid {display: grid;grid-column-gap: 5px;grid-row-gap: 5px;align-items: center;}\n</style>",
    "/attribute": "<div class='{{value}} vblock'><label>{{label}}</label><input class='value' name='{{value}}' placeholder='&mdash;' /><input class='modifier' name='{{modifier}}' placeholder='{{modifierValue}}' /><button onclick=\"()=>{sendMessage(`/r d20 ${doc.values.strengthModifier}`)}\">Roll</button></div>"
};return partials