 import moment from 'moment';
 import axios from 'axios';

 export const setNativeValue = ( element, value) => {
                 let lastValue = element.value;
                     element.value = value;

                    let typeElement = element.type == "textarea" ? "textarea": "input";
                    let event = new Event(typeElement, { target: element, bubbles: true });
                     // React 15
                     event.simulated = true;
                     // React 16
                     let tracker = element._valueTracker;
                     if (tracker) {
                         tracker.setValue(lastValue);
                     }
                     element.dispatchEvent(event);
       }

 export const setCheckboxRadio = (element, eventName)=> {
       let lastValue = element.value;

        let event = new Event(eventName, { target: element, bubbles: true });
        // React 15
        event.simulated = true;
        // React 16
        let tracker = element._valueTracker;
        if (tracker) {
            //tracker.setValue(lastValue);
        }
        element.dispatchEvent(event);

      //let lastValue = element.value;
      //let event = new Event("input", { target: element, bubbles: true });
       // React 15
      // event.simulated = true;
       // React 16
      // let tracker = element._valueTracker;
      // if (tracker) {
      //     tracker.setValue(lastValue);
     //  }
      // element.dispatchEvent(event);
  }


 export const getHeader =()=> {
        const userAuth = localStorage.getItem('userAuth');
        const schema = localStorage.getItem('schema');  // "GSTADMIN' AND t.TABNAME = 'EMP "
        const user = localStorage.getItem("user");
        const idlogo = localStorage.getItem("idlogo");
        const perpage = localStorage.getItem("perpage");
        const token = localStorage.getItem("token");
        const dbalias = localStorage.getItem("dbalias");

    return { schema : schema, user: user, pass: idlogo, devuser : window.devuser, token : token, dbalias : dbalias, Authorization: 'Bearer ' + userAuth, perpage: perpage } ;
  }

export const getHeaderParam =(schema)=> {
        const userAuth = localStorage.getItem('userAuth');
        const user = localStorage.getItem("user");
        const idlogo = localStorage.getItem("idlogo");
        const perpage = localStorage.getItem("perpage");
        const token = localStorage.getItem("token");
        const dbalias = localStorage.getItem("dbalias");

    return { schema : schema, user: user, pass: idlogo, devuser : window.devuser, token : token, dbalias : dbalias, Authorization: 'Bearer ' + userAuth, perpage: perpage } ;
  }



  export const setInput = (serverResponse)=>{
      for(var val in serverResponse){
       if(val != "Invalid date"){
              setVal(val , serverResponse[val]);
              //console.log(val + " :" +serverResponse[val]);
            if(typeof serverResponse[val] === 'object'){
               //alert(val +"-"+ serverResponse[val]);
               for(var val2 in serverResponse[val]) {
                 setVal(val2 , serverResponse[val][val2]);
               }
            }
         }
       }
  }

  const setVal= (key, val)=>{
      if(val != null){
          var val1 =   (val.toString().split(",").length - 1) > 3 || ((val.toString().split("-").length - 1)>1 && (val.toString().split(":").length - 1)>0) ?
                                                              moment(val).format('DD/MM/YYYY') : val  ;
              val1 = val1 == "Invalid date" ?  val : val1;

          var element = document.getElementsByName(key)[0];

        if(typeof element !== "undefined"){
            if(element.type =="checkbox"){
                 if(val1 == "S"){
                     element.checked = true;
                  }else{
                     element.checked = false;
                  }
            }else if(element.type == "radio"){
                     for (var i in document.getElementsByName(key)){
                         if(typeof  document.getElementsByName(key)[i]  !== "undefined" && document.getElementsByName(key)[i].value == val1){
                               document.getElementsByName(key)[i].checked = true;

                           }
                     }
            }  else{
              setNativeValue(element, val1);
            }
        }
   }
  }

  const  isValidDate= (value)=>{
      var dateWrapper = new Date(value);
      return !isNaN(dateWrapper.getDate());
  }

  export const goToLink=(e)=>{
        //window.location.href = e.target.getAttribute("href");
        /*
        setTimeout(
            function() {
               window.location.reload();
            }, 100);
         */
   }



   export const getParamQuery=(param)=>{
         var splitPr = window.location.href.split("?");
         var urlParams = new URLSearchParams("?"+splitPr[1]);
         return urlParams.get(param) != null ? urlParams.get(param) : "";
     }

  export const err403=(error)=>{
         if(error.response){
            if(error.response.status ==403)
              alert(window.ERRORMESSAGE);
         }
  }


 export const alertResult=(result)=>{
      if(result.includes("::")){
           var split = result.split("::");
           var input = document.getElementsByName(split[1]);
           if(input)
               input[0].focus();

           alert(split[0]);
       }else{
           alert(result);
       }
 }

/**
  create random string
**/

 export const random_id=()=>{
    var d = '_' + (
      Number(String(Math.random()).slice(2)) +
      Date.now() +
      Math.round(performance.now())
    ).toString(36);

     var d1 = '_' + (
      Number(String(Math.random()).slice(2)) +
      Date.now() +
      Math.round(performance.now())
    ).toString(36);

    return d+d1;
  }

   export const getBase64=(file, cb)=>{
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
          cb(reader.result)
      };
      reader.onerror = function (error) {
          console.log('Error: ', error);
      };
  }

export const convertDate=(inputFormat)=>{
  function pad(s) { return (s < 10) ? '0' + s : s; }
  var d = new Date(inputFormat)
  return d.getFullYear()+"-"+ pad(d.getMonth()+1)+"-"+pad(d.getDate()); //[pad(d.getFullYear(), pad(d.getMonth()+1), d.getDate())].join('-')
}