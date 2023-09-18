import logo from "../images/logo.png";
import dyk1 from "../images/dyk (1).jpg";
import dyk2 from "../images/dyk (2).jpg";
import dyk3 from "../images/dyk (3).jpg";
import dyk4 from "../images/dyk (4).jpg";
import dyk5 from "../images/dyk (5).jpg";
import dyk6 from "../images/dyk (6).jpg";
import dyk7 from "../images/dyk (7).jpg";
import dyk8 from "../images/dyk (8).jpg";
import dyk9 from "../images/dyk (9).jpg";
import dyk10 from "../images/dyk (10).jpg";
import dyk11 from "../images/dyk (11).jpg";
import dyk12 from "../images/dyk (12).jpg";
import dyk13 from "../images/dyk (13).jpg";
import dyk14 from "../images/dyk (14).jpg";
import dyk15 from "../images/dyk (15).jpg";
import dyk16 from "../images/dyk (16).jpg";
import dyk17 from "../images/dyk (17).jpg";
import a1 from "../images/a1.jpg";
import a2 from "../images/a2.jpg";
import a4 from "../images/a4.jpg";
import a3 from "../images/a3.jpg";
import a5 from "../images/a5.jpg";
import slogan from "../images/slogan.mp4"
import $ from "jquery"

const Home = () => {

    const clicked = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
      }
    
      //quote of the day
      const quotes = [
       '“The intelligent investor is a realist who sells to optimists and buys from pessimists.”-Benjamin Graham', 
       'The first rule of investment is don’t lose money, the second rule is don’t forget the first rule- Warren Buffet',
       '"The four most dangerous words in investing are: "This time its different."" - Sir John Templeton', 
       '"The more you learn, the more you earn." - Warren Buffett', 
       '"The most powerful force in the universe is compound interest." - Albert Einstein',
       '“The best way to measure your investing success is not by whether you’re beating the market but by whether you’ve put in place a financial plan and a behavioral discipline that are likely to get you where you want to go.”-Benjamin Graham',
       '"A budget is telling your money where to go instead of wondering where it went." - Dave Ramsey'
      ]
      const d = new Date().getDate();
      var x = Math.floor((d+10)/7);
      let messageOfTheDay = quotes[x];
    
      //script for personalized content
    
      const li1Clicked = () => {
        const li1 = document.querySelector(".li-1")
        const li2 = document.querySelector(".li-2")
        const li3 = document.querySelector(".li-3")
      
        const cont1 = document.querySelector(".info-1")
        const cont2 = document.querySelector(".info-2")
        const cont3 = document.querySelector(".info-3")
    
        cont1.classList.remove("hidden");
        cont2.classList.add("hidden");
        cont3.classList.add("hidden");
    
        li1.classList.add("underline");
        li2.classList.remove("underline");
        li3.classList.remove("underline");
      }
      const li2Clicked = () => {
        const li1 = document.querySelector(".li-1")
        const li2 = document.querySelector(".li-2")
        const li3 = document.querySelector(".li-3")
      
        const cont1 = document.querySelector(".info-1")
        const cont2 = document.querySelector(".info-2")
        const cont3 = document.querySelector(".info-3")
    
        cont1.classList.add("hidden");
        cont2.classList.remove("hidden");
        cont3.classList.add("hidden");
    
        li1.classList.remove("underline");
        li2.classList.add("underline");
        li3.classList.remove("underline");
      }
      const li3Clicked = () => {
        const li1 = document.querySelector(".li-1")
        const li2 = document.querySelector(".li-2")
        const li3 = document.querySelector(".li-3")
      
        const cont1 = document.querySelector(".info-1")
        const cont2 = document.querySelector(".info-2")
        const cont3 = document.querySelector(".info-3")
    
        cont1.classList.add("hidden");
        cont2.classList.add("hidden");
        cont3.classList.remove("hidden");
        
        li1.classList.remove("underline");
        li2.classList.remove("underline");
        li3.classList.add("underline");
      }
      
      //script for awareness pop-up
      const toggleModal = () => {
        const popup = document.querySelector("#modal");
        popup.classList.toggle("hidden");
      }

      $(function() {
        setTimeout(function() { $(".slogan").fadeOut(1500); }, 3000)
        
        })

    return (
      <div>
        {/* slogan */}
        <div className="slogan fixed z-50 overflow-y-auto top-0 w-full h-full left-0">
          <div className="h-full bg-white flex items-center justify-center text-center sm:block sm:p-0">
              <div className ="flex items-center justify-center align-center">
              <video width="500" height="500" autoplay="autoplay" loading="eager">
                <source rel="prefetch" src={slogan} type="video/mp4" loading="eager"/>
              </video>
              </div>
          </div>
      </div>
          {/* <!-- Navbar goes here --> */}
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
                  <a href="" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</a>
                  <a href="/general" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">General</a>
                  <a href="/personalized" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Personalized</a>
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
              <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
              <li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">General</a></li>
              <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">personalized</a></li>
              <li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Premium</a></li>
            </ul>
          </div>
        </nav>



      {/* ================message of the day========== */}
      <div>
        <div className="pt-10">
          <span className="text-2xl font-semibold">Message Of The Day</span>
        </div>
        <div className="sm:w-1/2 w-5/6 mt-8 mx-auto bg-green-50 rounded-lg shadow p-8">
          <h2 className="italic text-right text-blue-darkest leading-normal sm:text-xl text-md">
            {messageOfTheDay}
          </h2>
        </div>
      </div>


      {/* ===================carasoul images================ */}
      <div>
        <div className="w-full pt-10">
          <div className="m-auto overflow-hidden relative sm:w-2/3 w-5/6 rounded-lg">
              <ul className="flex w-[calc(400px*17)] animate-scroll">
                  <li className="w-[400px] py-2"><img src={dyk1} loading="eager"/> </li>
                  <li className="w-[400px] py-2"><img src={dyk2} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk3} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk4} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk5} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk6} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk7} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk8} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk9} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk10} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk11} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk12} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk13} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk14} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk15} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk16} loading="eager"/></li>
                  <li className="w-[400px] py-2"><img src={dyk17} loading="eager"/></li>
              </ul>
          </div>
        </div>
      </div>

      {/* ============ beware ================ */}
      <div className="flex place-content-center pt-10 flex-col items-center">
        <div className="sm:w-1/6 w-1/3">
          <span className="text-6xl font-mono text-red-500 animate-jump animate-infinite underline blink-hard">
            <span>Beware</span>
          </span>
        </div>
        <div className="sm:w-1/2 w-5/6 pt-10 sm:pl-20">
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"/></svg>
            <p className="text-left text-lg">  &nbsp;&nbsp;When you are offered Guaranteed returns in investment scheme.</p>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"/></svg>
            <p className="text-left text-lg">  &nbsp;&nbsp;When you are offered Guaranteed returns in investment scheme.</p>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-red-600" width="16" height="16" viewBox="0 0 16 16"><path fill="currentColor" d="M15.854 12.854L11 8l4.854-4.854a.503.503 0 0 0 0-.707L13.561.146a.499.499 0 0 0-.707 0L8 5L3.146.146a.5.5 0 0 0-.707 0L.146 2.439a.499.499 0 0 0 0 .707L5 8L.146 12.854a.5.5 0 0 0 0 .707l2.293 2.293a.499.499 0 0 0 .707 0L8 11l4.854 4.854a.5.5 0 0 0 .707 0l2.293-2.293a.499.499 0 0 0 0-.707z"/></svg>
            <p className="text-left text-lg">  &nbsp;&nbsp;When you are offered Guaranteed returns in investment scheme.</p>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/></svg>
            <p className="text-left text-lg">  &nbsp;A Smart Investor ensures the use of strong passwords and good data security practices such as two-step authentication on accounts containing financial data.</p>
          </div>
          <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" className="text-green-600" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m9 20.42l-6.21-6.21l2.83-2.83L9 14.77l9.88-9.89l2.83 2.83L9 20.42Z"/></svg>
            <p className="text-left text-lg">  &nbsp;Never share your OTP or passwords.</p>
          </div>
        </div>

        {/*============== Awareness popup ========= */}
        <div className="py-10" onClick={toggleModal}>
          <a 
            href="#" 
            className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300" 
            >
              Read more...</a>
        </div>
      </div>


        <div className="modal fixed z-40 overflow-y-auto top-0 w-full h-full left-0 pt-10 hidden" id="modal">
          <div className="h-full flex items-center justify-center pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="inset-0 transition-opacity">
                <div className="h-[1600px] absolute inset-0 bg-gray-900 opacity-75" />
              </div>
              <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
              <div className="inline-block align-center bg-green-50 px-10 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-6xl w-full" role="dialog" aria-modal="true" aria-labelledby="modal-headline">
                <div className="bg-green-50 px-10 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <h2><strong className="text-3xl">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <u>Be Aware of different kind of Frauds:</u></strong></h2>
                  <br type="_moz" />
                  <strong>1.</strong> <strong>Caution Against Unrealistic redressal:</strong><br />
                  <strong>2 Collection Investment Scheme </strong><br />
                  3 <strong>Dabba trading</strong><br />
                  4. <strong>Sebi Grievance Redressal:</strong><br />
                  <strong>5. </strong><strong>Say Goodbye to physical Cheques with ASBA:</strong><br />
                  &nbsp;<br />
                  &nbsp;<br />
                  <div className="flex">
                    <div className="w-2/3 pr-10">
                      <strong>Caution Against Unrealistic redressal: </strong><br />
                      The message is cautioning against the allure of high returns in a short amount of time, as this can lead to trouble. Investments or opportunities promising unrealistically high returns can be indicators of investment scams, get-rich-quick schemes, or other fraudulent activities. It&#39;s essential for individuals to thoroughly research and understand the risk. Further, investor can seek Investment advice from SEBI registered Investment Advisor, and be wary of any offers that sound too good to be true.<br />
                      &nbsp;<br />
                    </div>
                    <div className="w-1/3 ">
                      <div className="w-56 h-56">
                        <img src={a1} className="object-fit"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-5">
                    <div className="w-2/3 pr-10">
                      <strong>Collection Investment Scheme </strong><br />
                      Always be caution against the allure of high returns in a short amount of time, as this can lead to unnecessary trouble. Investments or opportunities that promises unrealistically high returns can be indicators of investment scams, get-rich-quick schemes, or other fraudulent activities. It&#39;s essential for individuals to thoroughly research and understand the risk. Further, investor can seek Investment advice from SEBI registered Investment Advisor, and be wary of any offers that sound too good to be true.<br />
                      &nbsp;<br />
                    </div>
                    <div className="w-1/3">
                      <div className="w-56 h-56">
                        <img src={a2} className="object-fit"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-5">
                    <div className="w-2/3 pr-10">
                      <strong>Dabba trading</strong><br />
                      Dabba trading is an illegal and unregulated form of trading. In dabba trading, traders place deals in securities without the trades actually being executed on any official SEBI recognized stock exchange. These trades are settled internally by the dabba operator and are outside the purview of stock exchanges and regulatory bodies. Since trades are not executed on official stock exchange platforms, investors can not avail grievances redressal mechanism of stock exchanges. Therefore, investor should exercise caution and should not indulge any kind of dabba trading<br />
                      &nbsp;<br />
                    </div>
                    <div className="w-1/3">
                      <div className="w-56 h-56">
                        <img src={a3} className="object-fit"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-5">
                    <div className="w-2/3 pr-10">
                      <strong>Sebi Grievance Redressal:</strong><br />
                      In case of any complaint related to the securities market, you may first approach the concerned intermediary or company. The concerned intermediary or company shall facilitate your complaint redressal. In case the grievance remains unresolved, you may approach the concerned Stock, Exchange or Depository against your stock broker or listed company. If you are still not satisfied with the redressal, you may lodge a complaint with SEBI through a web based centralized grievance redressal called SCORES (SEBI Complaints Redress System).<br />
                      &nbsp;<br />
                    </div>
                    <div className="w-1/3">
                      <div className="w-56 h-56">
                        <img src={a4} className="object-fit"/>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-5">
                    <div className="w-2/3 pr-10">
                      &nbsp;<br />
                      <strong>Say Goodbye to physical Cheques with ASBA:</strong><br />
                      Traditionally, investors were required to issue physical cheques as a means of payment when subscribing to IPOs. This process often entailed complex paperwork and potential delays. However, the ASBA facility has revolutionized this procedure. Now, investors can seamlessly participate in IPOs without the hassle of issuing physical cheques.
                    </div>
                    <div className="w-1/3">
                      <div className="w-56 h-56">
                        <img src={a5} className="object-fit"/>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-200 px-4 py-3 text-right">
                  <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal}><i className="fas fa-times"></i>Close</button>
                </div>
              </div>
          </div>
      </div>
      
      <div  className="border-t-2 border-slate-200 "></div>

      {/* ================= info ============= */}
      <div className="flex place-content-center pt-10">
        <div className="w-5/6 flex h-auto">
          <div className="w-1/4 bg-green-300">
            <ul className="pr-5 font-semibold">
              <li className="li-1 text-right py-2 text-lg underline cursor-pointer" onClick={li1Clicked}>Fraud</li>
              <li className="li-2 text-right py-2 text-lg cursor-pointer" onClick={li2Clicked}>Cyber Security</li>
              <li className="li-3 text-right py-2 text-lg cursor-pointer" onClick={li3Clicked}>Grievance Redressal</li>
            </ul>
          </div>
          <div className="w-3/4 bg-green-50">

            {/* info for fraud */}
            <div className="info-1 pt-5 text-left px-10">
              Fraudsters often targets unsuspecting individuals with promises of quick and high returns in a short time period. In reality, they aim to defraud investors, causing financial losses. Hence Investors are advised to stay vigilant and avoid falling in such trap.
              <p>To safeguard oneself from falling victim to investment frauds, it is strongly recommended to stay vigilant and avoid falling victim to investment frauds by keeping the following key points in mind:</p>

              <p><strong><em>Conduct due diligence before investing</em></strong>. Prior to making any investments, it is imperative to conduct comprehensive research about the company. This involves investigating the credibility of the company or individual offering the investment, examining their track record, and ensuring their legitimacy.</p>
              &nbsp;<br />
              <strong><em>Be cautious of investment promises offering high returns</em></strong><br />
              Be wary of investment schemes that promise exceptionally high returns. It&#39;s essential to recognize that such promises often come with elevated levels of risk.&nbsp;And never forget that Higher the returns, higher the risk.<br />
              &nbsp;<br />
              <strong><em>Avoid Pressure Tactics:&nbsp;</em></strong>Fraudsters frequently employ high-pressure tactics in an attempt to coerce/push you into making quick and hasty investment decisions. It&#39;s crucial not to succumb to such pressure and to take the necessary time to evaluate any potential investment carefully.<br />
              &nbsp;<br />
              <strong><em>Beware of Unsolicited Offers:</em></strong>&nbsp;Exercise caution when confronted with unsolicited investment offers that arrive via email, social media, or phone calls. Verify the legitimacy of these offers and refrain from making impulsive investment decisions based solely on them.<br />
              Legitimate investment schemes are not promoted through unsolicited calls or spam emails.<br />
              You may protect yourself from falling in such traps by always asking appropriate questions and clarifying all your doubts. You may even verify these by visiting regulator&rsquo;s website. Don&rsquo;t fall for tall claims.<br />
              &nbsp;<br />
              <strong><em>Be Alert to Warning Signs:</em></strong> Stay vigilant for common warning signs like guaranteed returns, lack of transparency regarding investment strategies, or reluctance or refusal to provide detailed information about the investment.<br />
              &nbsp;<br />
              <strong><em>Check whether investment schemes are regulated:</em></strong>&nbsp;Check if the investment company and the individuals promoting investment schemes are properly regulated by relevant financial regulatory authorities.<br />
              &nbsp;<br />
              <strong><em>Verify Regulatory Compliance:</em></strong> Ensure that investment schemes, as well as the individuals promoting them, are compliant with the regulations set forth by relevant financial regulatory authorities.<br />
              &nbsp;<br />
              <strong><em>Report Suspected Scams:</em></strong>&nbsp; If you encounter a potential investment scam or suspect fraudulent activity, promptly report it to the appropriate regulatory or law enforcement agencies.<br />
              &nbsp;<br />
              <strong><em>Seek Guidance from a Financial Advisor: &nbsp;</em></strong>Seek advice from a registered financial advisor before making any investment decisions. They will help to assess the legitimacy and suitability of an investment opportunity.
            </div>

            {/* info for cyber security */}
            <div className="info-2 hidden pt-5 text-left px-10">
              It is extremely important for individuals to remain safe online.<br />
              RBI and SEBI are extremely enthusiastic in making individuals aware of cyber attacks and preventing them from falling into such scams. With respect to this, many circulars and press releases are often issued to make induvial aware. They can access them at following websites.<br />
              &nbsp;<br />
              SEBI cautions investors not to invest in schemes offered by entities barred by SEBI from raising money- (attach pdf)<br />
              &nbsp;<br />
              <strong>RBI cautions on &#39;All Bank Balance Enquiry&#39; App</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=33674">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=33674</a><br />
              &nbsp;<br />
              <strong>Do Not Pay Money to receive Large Funds from Abroad : RBI Advisory</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=23922">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=23922</a><br />
              &nbsp;<br />
              <strong>Complain to Local Police/Cyber Crime Authorities against Fictitious Offers of Money from Abroad</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=25760">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=25760</a><br />
              &nbsp;<br />
              RBI warning on phishing mail- <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=26506">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=26506</a><br />
              &nbsp;<br />
              RBI warns about Fake website in its name- <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=31276">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=31276</a><br />
              &nbsp;<br />
              <strong>RBI Never asks for Your Bank Account Details</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=24179">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=24179</a><br />
              &nbsp;<br />
              <strong>Do Not fall Prey to Fictitious Offers of Funds Transfer: RBI Advisory</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=22552">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=22552</a><br />
              &nbsp;<br />
              <strong>Beware of Fictitious Offers/Lottery Winnings/Cheap Fund Offers: RBI</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=21110">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=21110</a><br />
              &nbsp;<br />
              <strong>Do not respond to Mails asking for your Internet Banking Account Details : RBI Cautions Public</strong><br />
              <a href="https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=27218">https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=27218</a>
            </div>

            {/* info for Grievance Redressal */}
            <div className="info-3 hidden pt-5 text-left px-10">
              Financial fraud&nbsp;or&nbsp;scam&nbsp;is a growing problem in today&rsquo;s world. Every year we hear new stories about people losing all their money by investing in&nbsp;illegal&nbsp;schemes. But this has not stopped others from falling prey to these schemes. This is because criminals are very creative and they keep changing their tactics to find new victims. You can keep your money safe by being aware of these risks.&nbsp;The first step in&nbsp;protecting yourself against fraud or scam&nbsp;is knowing what it is and how to recognize various types of fraud or scam.<br />
              &nbsp;<br />
              &nbsp;The financial sector in India has been the fastest to grab every opportunity, in terms of reforms and development, presented by the paradigm shift in India&rsquo;s economic policy. The government of India through financial sector regulators has brought in guidelines to provide direction and control to all companies to work in ethical ways, create trust among shareholders and customers, provide stability to the economy and check&nbsp;financial scams&nbsp;and&nbsp;frauds.<br />
              &nbsp;<br />
              But for all the development efforts, the financial sector is still evolving and requires adequate supervision, strict accountability and appropriate punishment because of various scams/ frauds that have taken place.<br />
              &nbsp;<br />
              Click on to visit the respective&nbsp;<strong>Regulator&#39;s Grievance Redressal Mechanism</strong>.<br />
              RBI- <a href="https://rbi.org.in/Scripts/Complaints.aspx">https://rbi.org.in/Scripts/Complaints.aspx</a><br />
              SEBI- <a href="https://scores.gov.in/scores/Welcome.html">https://scores.gov.in/scores/Welcome.html</a><br />
              PFRDA- <a href="http://www.npstrust.org.in/grievance-redressal">http://www.npstrust.org.in/grievance-redressal</a><br />
              IRDAI- <a href="https://policyholder.gov.in/home">https://policyholder.gov.in/home</a>
            </div>

          </div>
        </div>
      </div>
      </div>
    );
}

export default Home;