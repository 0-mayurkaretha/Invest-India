import logo from "../images/logo.png";
import { useState } from "react";
import $ from 'jquery'

const PersonalizedPage = () => {	

    const tabsData = [
        {
          label: "Your Financial Goals at a glance ",
          content: `<div class="container"><div class="form-part"><h2>Summary</h2><div class="form-inputs"><div class="text-input"><label for="">Monthly Income </label><input type="text" name="email" id="email"></div><div class="text-input"><label for="">Monthly Expenditure </label><input type="text" name="address" id="address"></div><div class="text-input"><label for="">How much would you like to invest</label><input type="text" name="address" id="address"></div><div><label for="">Your Immediate Goals- </label></div><div class="cub-input"><div class="text-input"><label for="street">Goal 1</label><input type="text" name="street" id="street"></div><div class="text-input"><label for="postalcode">Goal 2</label><input type="text" name="postalcode" id="postalcode"></div><div class="text-input"><label for="city">Goal 3</label><input type="text" name="city" id="city"></div><div class="clearfix"></div></div><div><label for="">Your Mid Term  Goals- </label></div><div class="cub-input"><div class="text-input"><label for="street">Goal 1</label><input type="text" name="street" id="street"></div><div class="text-input"><label for="postalcode">Goal 2</label><input type="text" name="postalcode" id="postalcode"></div><div class="text-input"><label for="city">Goal 3</label><input type="text" name="city" id="city"></div><div class="clearfix"></div></div><div><label for="">Your Long Term  Goals- </label></div><div class="cub-input"><div class="text-input"><label for="street">Goal 1</label><input type="text" name="street" id="street"></div><div class="text-input"><label for="postalcode">Goal 2</label><input type="text" name="postalcode" id="postalcode"></div><div class="text-input"><label for="city">Goal 3</label><input type="text" name="city" id="city"></div><div class="clearfix"></div></div></div></div></div><style>* {margin: 0;padding: 0;outline: 0;}.container {width: 550px;margin: 45px auto;}.clearfix {clear: both;}.form-part {margin: 20px 0;}.form-part h2 {font-size: 25px;font-weight: 400;font-family: 'Josefin Sans', sans-serif;margin-bottom: 15px;}.text-input,.radio-button,.check-boxes {margin-bottom: 13px;}.text-input label,.radio-button label,.check-boxes label {display: block;margin-bottom: 3px;font-family: 'Josefin Sans', sans-serif;font-size: 14px;font-weight: 600;}.radio-button label,.check-boxes label {margin-bottom: 7px;font-weight: 900;}.text-input input,.text-input textarea,.text-input select {padding: 10px 10px;display: block;width: 100%;border: solid 3px #ccc;-webkit-border-radius: 2px;-moz-border-radius: 2px;border-radius: 2px;}.text-input select {width: 100%;}.text-input textarea {height: 100px;}.sqr-input .text-input,.sqr-radio-input .radio-button,.sqr-check-input .check-boxes {float: left;width: 45%;}.sqr-input .text-input:nth-child(1),.sqr-radio-input .radio-button:nth-child(1),.sqr-check-input .check-boxes:nth-child(1) {margin-right: 10%;}.cub-input .text-input {float: left;width: 26.66%;}.cub-input .text-input:nth-child(1),.cub-input .text-input:nth-child(2) {margin-right: 10%;}.ns-radio-btn input[type="radio"],.ns-check-box input[type="checkbox"] {visibility: hidden;}.ns-radio-btn {width: 20px;height: 20px;display: inline-block;float: left;margin: 3px 7px 0 0;cursor: pointer;position: relative;-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;border: 3px solid #ccc;box-shadow: 0 0 1px #ccc;background: rgb(255, 255, 255);background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(47%, rgba(246, 246, 246, 1)), color-stop(100%, rgba(237, 237, 237, 1)));background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -o-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -ms-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed', GradientType=0);}.checkedRadio {-moz-box-shadow: inset 0 0 5px 1px #ccc;-webkit-box-shadow: inset 0 0 5px 1px #ccc;box-shadow: inset 0 0 5px 1px #ccc;}.ns-radio-btn i {border: 1px solid #E1E2E4;width: 10px;height: 10px;position: absolute;left: 4px;top: 4px;-webkit-border-radius: 100%;-moz-border-radius: 100%;border-radius: 100%;}.checkedRadio i {background-color: #898A8C;}.ns-check-box {width: 22px;height: 22px;cursor: pointer;display: inline-block;margin: 2px 7px 0 0;position: relative;overflow: hidden;box-shadow: 0 0 1px #ccc;-webkit-border-radius: 3px;-moz-border-radius: 3px;border-radius: 3px;background: rgb(255, 255, 255);background: -moz-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(255, 255, 255, 1)), color-stop(47%, rgba(246, 246, 246, 1)), color-stop(100%, rgba(237, 237, 237, 1)));background: -webkit-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -o-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: -ms-linear-gradient(top, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(246, 246, 246, 1) 47%, rgba(237, 237, 237, 1) 100%);filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#ededed', GradientType=0);border: 1px solid #ccc;}.ns-check-box i {background: url('http://cdn1.iconfinder.com/data/icons/mimiGlyphs/16/check_mark.png') no-repeat center center;position: absolute;left: 3px;bottom: -15px;width: 16px;height: 16px;opacity: .5;-webkit-transition: all 400ms ease-in-out;-moz-transition: all 400ms ease-in-out;-o-transition: all 400ms ease-in-out;transition: all 400ms ease-in-out;-webkit-transform: rotateZ(-180deg);-moz-transform: rotateZ(-180deg);-o-transform: rotateZ(-180deg);transform: rotateZ(-180deg);}.checkedBox {-moz-box-shadow: inset 0 0 5px 1px #ccc;-webkit-box-shadow: inset 0 0 5px 1px #ccc;box-shadow: inset 0 0 5px 1px #ccc;border-bottom-color: #fff;}.checkedBox i {bottom: 2px;-webkit-transform: rotateZ(0deg);-moz-transform: rotateZ(0deg);-o-transform: rotateZ(0deg);transform: rotateZ(0deg);}.radio-button ul li,.check-boxes ul li {display: inline-block;vertical-align: top;margin-right: 30px;margin-bottom: 7px;}.sqr-radio-input .radio-button ul li,.sqr-check-input .check-boxes ul li {margin-right: 15px;}.radio-button ul li span {display: inline-block;margin-top: 8px;font-family: 'Josefin Sans', sans-serif;}.check-boxes ul li span {display: inline-block;vertical-align: top;margin-top: 5px;font-family: 'Josefin Sans', sans-serif;}.sqr-input .text-input .sqr-input .text-input:nth-child(1) {margin-right: 15%;width: 40%;}.margin-bottom-zero {margin-bottom: 0px;}</style>`,
        },
        {
          label: "Financial Goals and Time span ",
          content: 'According investment needed for Immediate Goals, Mid Term and Long term Goals<br />&nbsp;<br />You can calculate monthly SIPs required to achieve your financial goals using following calculators- <a href="https://www.mutualfundssahihai.com/en/calculators">https://www.mutualfundssahihai.com/en/calculators</a><br />&nbsp;<br />&nbsp;<br />All Other Calculators:<ol><li>SIP Calculator- <a href="https://www.mutualfundssahihai.com/en/sip-calculator">https://www.mutualfundssahihai.com/en/sip-calculator</a></li><li>Goal SIP Calculator- <a href="https://www.mutualfundssahihai.com/en/goal-sip-calculator">https://www.mutualfundssahihai.com/en/goal-sip-calculator</a></li><li>Inflation Calculator- <a href="https://www.mutualfundssahihai.com/en/inflation-calculator">https://www.mutualfundssahihai.com/en/inflation-calculator</a></li><li>Step Up SIP Calculator- <a href="https://groww.in/calculators/step-up-sip-calculator">https://groww.in/calculators/step-up-sip-calculator</a></li><li>Pension Calculator- <a href="https://npstrust.org.in/nps-calculator">https://npstrust.org.in/nps-calculator</a></li><li>Atal Pension Yojana Calculator- <a href="https://npstrust.org.in/content/apy-calculator">https://npstrust.org.in/content/apy-calculator</a></li><li>Compounding-&nbsp; <a href="https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html">https://www.iciciprulife.com/insurance-guide/financial-planning-tools-calculators/power-compounding-calculator.html</a></li><li>HRA Exemption Calculator- <a href="https://incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx">https://incometaxindia.gov.in/Pages/tools/house-rent-allowance-calculator.aspx</a></li></ol>',
        },
        {
            label: "Expenditure tracking ",
            content: 'After creating your account.<br />You can update your day-to-day expenditure to track and limit unnecessary expenditure<br />Monthly comparison can also be done.<br />&nbsp;<table border="0" cellpadding="0" cellspacing="0" style="height:413px; width:320px"><tbody><tr><td style="height: 20px; width: 96px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</td><td style="height: 20px; width: 146.783px;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;</td><td style="height: 20px; width: 1px;">Rs&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">Income</td><td style="height: 20px; width: 146.783px;">Salary</td><td style="height: 20px; width: 1px;">100000</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Allowance</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Bonus</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Petty Cash</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Other</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">Expenditure</td><td style="height: 20px; width: 146.783px;">Household</td><td style="height: 20px; width: 1px;">-5000</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Transportation</td><td style="height: 20px; width: 1px;">-6000</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Savings</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Food</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Clothes</td><td style="height: 20px; width: 1px;">-2000</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Health</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Education</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td colspan="2" style="height: 20px; width: 136px;">Self Development</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Loan</td><td style="height: 20px; width: 1px;">-20000</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Gift</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td colspan="2" style="height: 20px; width: 136px;">Online Shopping</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Beauty</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr><tr><td style="height: 20px; width: 96px;">&nbsp;</td><td style="height: 20px; width: 146.783px;">Others</td><td style="height: 20px; width: 1px;">&nbsp;</td></tr></tbody></table>&nbsp;<br />(Example)- Graphs and Pie chart<br />&nbsp;'
          },
          {
            label: "Facts related to investments ",
            content: '1. There is a direct linear correlation between higher education levels and superior portfolio diversification.<br /><br />2. 9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.<br /><br />3. On an average, loss makers registered net trading loss close to Rs 50000 over and above the net trading losses uncured, loss makers expended an additional 28% of net trading losses as transaction costs. Those making 15-50% of such profits as transaction costs.<br /><br />4. Household awareness of savings schemes is significantly higher than a cognizance of investment instruments. Primary motivation for investing is capital gains, closely followed by lifestyle improvement plans.<br /><br />5. Middle-income groups save more as a percentage of their annual income than the highest income groups.<br /><br />6. Clear inverse linear relationship between income and debt levels; that is, as income levels increase, debt (as percentage of income) falls.',
          },
          {
            label: "Sentiment Analysis ",
            content: 'Your Preferred risk appetite (which you opted)<br /> - High Risk (From Fill your details sheet- B-6)<br /> <br /> But Preferable risk appetite (Base on AI suggestion)<br /> - Moderate (From Logic Sheet)<br /> <br /> Still your choice<br /> - Which one would you opt for- (High/ Moderate)<br /> <br /> Based on your selection, you will be suggested appropriate investment instruments.',
          },
          {
            label: "Your Learning Section ",
            content: `<div class="main"><style>* {outline: 0;font-family: sans-serif}body {background-color: #fafafa}span.msg,span.choose {color: #555;padding: 5px 0 10px;display: inherit}.container {width: 500px;margin: 50px auto 0;text-align: center}/*Styling Selectbox*/.dropdown {width: 300px;display: inline-block;background-color: #fff;border-radius: 2px;box-shadow: 0 0 2px rgb(204, 204, 204);transition: all .5s ease;position: relative;font-size: 14px;color: #474747;height: 100%;text-align: left}.dropdown .select {cursor: pointer;display: block;padding: 10px}.dropdown .select > i {font-size: 13px;color: #888;cursor: pointer;transition: all .3s ease-in-out;float: right;line-height: 20px}.dropdown:hover {box-shadow: 0 0 4px rgb(204, 204, 204)}.dropdown:active {background-color: #f8f8f8}.dropdown.active:hover,.dropdown.active {box-shadow: 0 0 4px rgb(204, 204, 204);border-radius: 2px 2px 0 0;background-color: #f8f8f8}.dropdown.active .select > i {transform: rotate(-90deg)}.dropdown .dropdown-menu {position: absolute;background-color: #fff;width: 100%;left: 0;margin-top: 1px;box-shadow: 0 1px 2px rgb(204, 204, 204);border-radius: 0 1px 2px 2px;overflow: hidden;display: none;max-height: 144px;overflow-y: auto;z-index: 9}.dropdown .dropdown-menu li {padding: 10px;transition: all .2s ease-in-out;cursor: pointer}.dropdown .dropdown-menu {padding: 0;list-style: none}.dropdown .dropdown-menu li:hover {background-color: #f2f2f2}.dropdown .dropdown-menu li:active {background-color: #e2e2e2}</style><div class="container"><span class="choose">Choose courses </span><div class="dropdown"><div class="select"><span>Select courses </span><i class="fa fa-chevron-left"></i></div><input type="hidden" name="gender"><ul class="dropdown-menu"><li>Equity </li><li>Markets </li><li>Mutual Funds </li><li>Futures and Options </li><li>Heding </li><li>Technical Analysis</li><li>Fundamental Analysis</li><li>Future Trading</li><li>Option Theory and Strategies</li><li>Markets and Taxation</li><li>Currency, Commodity and Government Securities</li><li>Risk Management and trading psychology </li><li>Trading and Investment system </li><li>Personal Finance </li><li>Integrated Financial Modeling </li><li>Tax saving </li></ul></div><span class="msg"></span></div>`,
          },
          {
            label: "Quiz ",
            content: `Updated soon`,
          },
          {
            label: "Your Portfolio  ",
            content: `If you link your portfolio, you may be able to know the risk level of your portfolio. This will make investors aware of the stocks that they are invested in.<br />Many a times they choose what is projected to them as a gimmick or if someone from their family of friend circle have mentioned or purchased it, without being fully aware about the history.<br />Ai will detect the risk level of your portfolio based on kind of assets you are invested in.<ol><li>Preferred= Preferrable - suggestions of the same risk appetite</li><li>Preferred, Preferrable high- Alternative Suggestions based on Preferrable (one step higher risk assets)</li><li>Preferred, preferrable Low- Alternative Suggestions based on Preferrable (one step Lower risk assets)</li></ol>`,
          },
          {
            label: "Know your Financial Health  ",
            content: `Updated soon`
          },
          {
            label: "Souces to refer ",
            content:`Always look for correct and complete information before opting for any investment choices<br /> For investing in equity, look for P &amp; L Loss, AUM etc etc<br /> You may refer to these following sites: <ol>  <li><a href="https://www.screener.in/">https://www.screener.in/</a></li>  <li><a href="https://www.tickertape.in/">https://www.tickertape.in/</a></li> </ol>`,
          }
      ];

    const clicked = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
      }

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    //========== script for dropdown ==========
    $('.dropdown').click(function () {
        $(this).attr('tabindex', 1).focus();
        $(this).toggleClass('active');
        $(this).find('.dropdown-menu').slideToggle(300);
    });
    $('.dropdown').focusout(function () {
        $(this).removeClass('active');
        $(this).find('.dropdown-menu').slideUp(300);
    });
    $('.dropdown .dropdown-menu li').click(function () {
        $(this).parents('.dropdown').find('span').text($(this).text());
        $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
    });
    /*End Dropdown Menu*/

 
    $('.dropdown-menu li').click(function () {
    var input = '<strong>' + $(this).parents('.dropdown').find('input').val() + '</strong>',
        msg = '<span class="msg">Hidden input value: ';
    $('.msg').html(msg + input + '</span>');
    }); 



    return (
        <div className="bg-green-50">
            {/* <!-- Navbar goes here --> */}
            <div>
                <nav className="bg-green-100 shadow-lg">
                    <div className="max-w-6xl mx-auto px-4">
                        <div className="flex justify-between">
                        <div className="flex space-x-7">
                            <div className="md:h-12 h-14">
                            {/* <!-- Website Logo --> */}
                            <img src={logo} alt="Logo" className="object-fit h-28 w-28 mr-4 -mt-6" />
                            </div>
                            {/* <!-- Primary Navbar items --> */}
                            <div className="hidden md:flex items-center space-x-1">
                            <a href="/" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
                            <a href="/general" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">General</a>
                            <a href="#" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">personalized</a>
                            <a href="#" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Premium</a>
                            </div>
                        </div>
                        {/* <!-- Secondary Navbar items --> */}
                        <div className="hidden md:flex items-center space-x-3 ">
                            <a href="#" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</a>
                            <a href="#" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</a>
                        </div>
                        {/* <!-- Mobile menu button --> */}
                        <div className="md:hidden flex items-center" onClick={clicked}>
                            <button className="outline-none mobile-menu-button">
                            <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
                            x-show="!showMenu"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            >
                            <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                        </div>
                        </div>
                    </div>
                    {/* <!-- mobile menu --> */}
                    <div className="hidden mobile-menu">
                        <ul className="">
                        <li ><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold">Home</a></li>
                        <li className="active"><a href="#" className="block text-sm px-2 py-4  text-white bg-green-500">General</a></li>
                        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">personalized</a></li>
                        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Premium</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="pt-10 ">
                <div>
                    <div className="flex space-x-2 border-b px-2 bg-green-200">
                        {/* Loop through tab data and render button for each. */}
                        {tabsData.map((tab, idx) => {
                        return (
                            <button
                            key={idx}
                            className={`py-2 border-b-4 transition-colors duration-300 font-semibold ${
                                idx === activeTabIndex
                                ? "border-teal-500"
                                : "border-transparent hover:border-gray-200"
                            }`}
                            // Change the active tab on click.
                            onClick={() => setActiveTabIndex(idx)}>
                            {tab.label}
                            </button>
                        );
                        })}
                    </div>
                    {/* Show active tab content. */}
                    <div className="pt-5 flex justify-center ">
                        <div className="py-4 text-left w-5/6">
                            <p dangerouslySetInnerHTML={{__html: tabsData[activeTabIndex].content}}></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonalizedPage;