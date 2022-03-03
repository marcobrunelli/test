import React, { Component } from 'react';
import Menu from './Menu.js';
import axios from 'axios';
import { getHeader}  from './../Utils.js'
import LoginMain from './LoginMain.js'


class Header extends Component {
 constructor(props) {
     super(props);
     this.state = {response : [],
                   loaded:false,
                   needLogin:false,
                   demoTime: "1",
                   timer:"",
                   time:"",
                   }
 }

 componentDidMount() {
       const user = localStorage.getItem('user');  // "GSTADMIN' AND t.TABNAME = 'EMP "


       if(user =="" || user == null )
           this.setState({ needLogin:true});


        axios.get(window.API_URL+'main-check-is', { headers: getHeader() })
                .then(res => {
                  if(res.data !=""){

                       var varDate = new Date(res.data); //dd-mm-YYYY
                            varDate.setHours(0,0,0,0);

                       var today = new Date();
                           today.setHours(0,0,0,0);

                       if(varDate < today) {
                          localStorage.setItem("token", "");
                          this.setState({ needLogin:true, demoTime:"3"});
                       }else{
                         this.setState({ demoTime: "2"});
                        // Set the date we're counting down to
                         var countDownDate = new Date( res.data+" 23:59:59").getTime();
                         this.showTimer(countDownDate);
                       }
                    }

                 }).catch((error) => {

                 });
 }

  showTimer =(countDownDate )=>{
      // alert();
    // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     // var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Output the result in an element with id="demo"

      this.setState({ time : days + " Giorn"+(days ==1 ? "o":"i")   });
    }


 render() {
  return (
   <div>
     {this.state.needLogin ? (<LoginMain demoTime = {this.state.demoTime}/>):(<></>)}
     <div class="periodDayTop" style={{display: this.state.demoTime =="2" ? "":"none"}}><i> Il periodo demo termina tra</i> : <b>{this.state.time}</b></div>

   </div>
  );
 }
}

export default Header;