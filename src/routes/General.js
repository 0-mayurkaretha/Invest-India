import logo from "../images/logo.png";
import inflation from "../images/inflation.png";
import compounding from "../images/compounding.png";
import rulesOfCompounding from "../images/rulesOfCompounding.png";
import { useState } from "react";
import $ from 'jquery'

const GeneralPage = () => {

  var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "In which market, securities are issued to investors for the first time?",
		"options" : [
			{"a": "Primary Market", 
			 "b":"Secondary Market", 
			 }
			],
		"answer":"Primary Market",
		"score":0,
		"status": ""
	},
	{
		"id" : 2,
		"question" : "Who are the major investors in government securities market in India?",
		"options" : [
			{"a": "Banks and Insurance Companies", 
			 "b":"Provident Funds", 
       "c":"State Governments",
       "d":"All of the Above"}
			],
		"answer":"All of the Above",
		"score":0,
		"status": ""
	},
	{
		"id" : 3,
		"question" : "The SLR and CRR rates are decided by which of the following regulatory bodies??",
		"options" : [
			{"a": "Reserve Bank of India", 
       "b":"Securities and Exchange Board of India"
       }
			],
		"answer":"Reserve Bank of India",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "Derivatives in which of the underlying assets are allowed in the Indian Market?",
		"options" : [
			{"a": "Equities", 
       "b":"Currency",
       "c":"Commodities",
       "d":"All of above"
			}
			],
		"answer":"All of above",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "The merchant banker leading a public offer is popularly known as the ‘Lead Manager’. State whether True or False.",
		"options" : [
			{"a": "True", 
			 "b":"False",
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "As per the SEBI (Certification of Associated Persons in Securities Markets) Regulations, 2007, a certificate is valid for a period of ______ from the date of grant of certificate or revalidation: ",
		"options" : [
			{"a": "1 year", 
			 "b":"2 years",
			 "c":"3 years",
			}
			],
		"answer":"3 years",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "Which Act aims at prohibiting anti‐competitive agreements, abuse of dominant position by enterprises and regulates combinations (acquisition, acquiring of control and M&A), which causes or likely to cause an appreciable adverse effect on competition within India?",
		"options" : [
			{"a": "SEBI Act, 1992", 
			 "b":"Competition Act, 2002",
			}
			],
		"answer":"Competition Act, 2002",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "Who is a Qualified Institutional Buyer?",
		"options" : [
			{"a": "SEBI registered mutual fund, venture capital fund", 
			 "b":"SEBI registered FII and sub‐account",
			 "c":"Scheduled commercial bank",
			 "d":"All of the above",
			}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "Which of the following ways are used by the Promoters to dilute/offload their holding in listed companies?",
		"options" : [
			{"a": "Offer for sale of shares", 
			 "b":"Preferential Issue",
			}
			],
		"answer":"Offer for sale of shares",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "Under ASBA facility, investors apply in __________ by using their bank account.",
		"options" : [
			{"a": "Public Issues", 
			 "b":"Rights Issues",
			 "c":"Both the above",
			}
			],
		"answer":"Both the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "Further Public Offer (FPO) can be made only through book building issues through the stock exchange route. State whether True or False?",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "A Merchant Banker applicant should have how many people in his employment who should be experienced to conduct the business of Merchant Banker?",
		"options" : [
			{"a": "1", 
			 "b":"2",
			 "c":"3",
			 "d":"4"
			}
			],
		"answer":"2",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "The fees payable by the merchant banker on grant of certificate of registration should be by a demand draft in favour of ‘Association of Investment Bankers of India (AIBI)’ payable at Mumbai.",
		"options" : [
			{"a": "True", 
			 "b":"False"
			}
			],
		"answer":"False",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "Every merchant banker shall submit to SEBI complete particulars of any transaction for acquisition of securities of any Body Corporate whose issue is being managed by that merchant banker within ______ from the date of entering into such transaction.",
		"options" : [
			{"a": "10 days", 
			 "b":"15 days",
			 "c":"20 days"
			}
			],
		"answer":"15 days",
		"score":0,
		"status": ""
	},
	{
		"id" : 15,
		"question" : "SCORES system of SEBI does not deal with any complaints which fall under the purview of the other regulatory bodies i.e. IRDA, PFRDA etc.",
		"options" : [
			{"a": "True", 
			 "b":"False",
			}
			],
		"answer":"True",
		"score":0,
		"status": ""
	},
	{
		"id" : 16,
		"question" : "Which of the following activities does the merchant banker have to perform in the process of Issue Management?",
		"options" : [
			{"a": "Handles the statutory compliance requirements", 
			 "b":"Event Manager",
			 "c":"Handles the investors’ interest in fiduciary capacity",
			 "d":"All of the above"
			}
			],
		"answer":"All of the above",
		"score":0,
		"status": ""
	},
	{
		"id" : 17,
		"question" : "A promoter of XYZ company wants to raise resources through public issue. He was barred from accessing the capital market last year by SEBI on account of insider trading. Is he eligible to come out with public issue?",
		"options" : [
			{"a": "Yes, he can raise money through public issue", 
			 "b":"No he cannot raise money through public issue"
			}
			],
		"answer":"No he cannot raise money through public issue",
		"score":0,
		"status": ""
	},
	{
		"id" : 18,
		"question" : "There is restriction on the number of warrants being attached to public issue or rights issue. How many warrants can be attached to a specified security?",
		"options" : [
			{"a": "1", 
			 "b":"2",
       "c":"3",
       "d":"4",
			}
			],
		"answer":"1",
		"score":0,
		"status": ""
	},
	{
		"id" : 19,
		"question" : "Who appoints the accountants and the auditors who help in reviewing and auditing financials and preparing financial statement as per SEBI (ICDR) Regulations for inclusion in the Offer Document?",
		"options" : [
			{"a": "Ministry of Corporate Affairs", 
       "b":"Merchant Banker",
       "c":"Issuer Company"
			}
			],
		"answer":"false",
		"score":0,
		"status": ""
	},
	{
		"id" : 20,
		"question" : "How can you detect the client&rsquo;s browser name?",
		"options" : [
			{"a": "navigator.appName", 
			 "b":"browser.name",
			 "c":"client.navName"
			}
			],
		"answer":"navigator.appName",
		"score":0,
		"status": ""
	},
	{
		"id" : 21,
		"question" : "Which event occurs when the user clicks on an HTML element?",
		"options" : [
			{"a": "onchange", 
			 "b":"onclick",
			 "c":"onmouseclick", 
			 "d":"onmouseover"
			}
			],
		"answer":"onclick",
		"score":0,
		"status": ""
	},
	{
		"id" : 22,
		"question" : "How do you declare a JavaScript variable?",
		"options" : [
			{"a": "var carName;", 
			 "b":"variable carName;",
			 "c":"v carName;"
			}
			],
		"answer":"var carName;",
		"score":0,
		"status": ""
	},
	{
		"id" : 23,
		"question" : "Which operator is used to assign a value to a variable?",
		"options" : [
			{"a": "*", 
			 "b":"-",
			 "c":"=",
			 "d":"x"
			}
			],
		"answer":"=",
		"score":0,
		"status": ""
	},
	{
		"id" : 24,
		"question" : "What will the following code return: Boolean(10 &gt; 9)",
		"options" : [
			{"a": "NaN", 
			 "b":"false",
			 "c":"true"
			}
			],
		"answer":"true",
		"score":0,
		"status": ""
	},
	{
		"id" : 25,
		"question" : "Is JavaScript case-sensitive?",
		"options" : [
			{"a": "No", 
			 "b":"Yes"
			}
			],
		"answer":"Yes",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   
		option = option.replace(/\>/g,"&gt;")  
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
	});


  
// 	$(window).on('load',function() {
//     // executes when complete page is fully loaded, including all frames, objects and images
//       document.getElementById("next").addEventListener("click", function(e){
//         e.preventDefault();
//       if(selectedopt) {
//         jsq.checkAnswer(selectedopt);
//         }
//         jsq.changeQuestion(1);
//       })

//       document.getElementById("previous").addEventListener("click", function(e){
//       e.preventDefault();
//       if(selectedopt) {
//         jsq.checkAnswer(selectedopt);
//       }
//         jsq.changeQuestion(-1);
//       })
//    });
	



	// $('#next').click(function(e) {
	// 		e.preventDefault();
	// 		if(selectedopt) {
	// 			jsq.checkAnswer(selectedopt);
	// 		}
	// 		jsq.changeQuestion(1);
	// });	
	
	// $('#previous').click(function(e) {
	// 	e.preventDefault();
	// 	if(selectedopt) {
	// 		jsq.checkAnswer(selectedopt);
	// 	}
	// 		jsq.changeQuestion(-1);
	// });	

    const tabsData = [
        {
          label: "Real Time Market Updates |",
          content: '<ul><li><strong>&bull;</strong><span style="font-size:18px">Always visit authentic sources to gather or access information. Many misleading or fraud sites are also circulated in the market to mislead investors.</span></li><li><strong>&bull;</strong><span style="font-size:18px">Few of such sites are listed below;</span></li></ul><span style="font-size:18px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://www.nseindia.com/">https://www.nseindia.com/</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://www.bseindia.com/">https://www.bseindia.com/</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://moneytimes.in/">https://moneytimes.in/</a></span><ul><li><strong>&bull;</strong><span style="font-size:18px">For Economic News: you may visit</span></li></ul><span style="font-size:18px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://www.bloomberg.com/asia">https://www.bloomberg.com/asia</a></span><ul><li><strong>&bull;</strong><span style="font-size:18px">For national and international news: you may visit</span></li></ul><span style="font-size:18px"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://newsonair.gov.in/National-News.aspx">https://newsonair.gov.in/National-News.aspx</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://pib.gov.in/indexd.aspx">https://pib.gov.in/indexd.aspx</a><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span>➤<span style="font-size:18px"><a href="https://www.bbc.com/news">https://www.bbc.com/news</a></span>',
        },
        {
          label: "Cyber Security |",
          content: '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In today&#39;s digital age, safeguarding your investments goes beyond making wise financial decisions. One essential aspect of protecting your investments is ensuring the security of your online accounts, trading account and demat account. The fundamental rule is simple yet crucial:<strong><em>&nbsp;Never Share Your Password or OTP </em></strong><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your investment accounts, whether they belong to online brokerage platforms, financial institutions, or trading platforms, contain sensitive financial information. Sharing your password, even with someone you trust, poses significant risks. It opens the door to potential fraud, unauthorized transactions, and loss of control over your investments.<br /><br /><strong>Precautions to be followed:</strong><br />- Never share your OTP or passwords with anyone else.<br />-Be cautious if anyone is offering Guaranteed returns in investment scheme.<br />-BE extremely cautious when someone promises you high returns with no risks. Research yourself before investing in such schemes.<br />- Beware when any investment scheme is not providing information transparently.<br />-Always ensures to use strong passwords and good data security practices such as two-step authentication on accounts containing financial data.<br />&nbsp;<br />&nbsp;<br /><strong>Being Safe Online: </strong><br /><br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; It is extremely important for individuals to remain safe online.<br />RBI and SEBI are extremely enthusiastic in making individuals aware of cyber-attacks and preventing them from falling into such scams. With respect to this, many circulars and press releases are often issued to make individuals aware.<br /><br />Guidelines provided by RBI:<ul><li>SEBI cautions investors not to invest in schemes offered by entities barred by SEBI from raising money</li><li>RBI advises not to Pay Money to receive Large Funds from Abroad</li><li>Complain to Local Police/Cyber Crime Authorities against Fictitious Offers of Money from Abroad</li><li>RBI warning on phishing mail</li><li>RBI Never asks for Your Bank Account Details</li><li>Do Not fall Prey to Fictitious Offers of Funds Transfer: RBI Advisory</li><li>RBI advises to be aware of Fictitious Offers/Lottery Winnings/Cheap Fund Offers</li><li>Do not respond to Mails asking for your Internet Banking Account Details : RBI Cautions Public</li></ul>',
        },
        {
            label: "Learning at a glance |",
            content: '<p><strong>Need of Investing : </strong></p>Investing offers individuals an opportunity to build wealth without the fierce competition and mental strain that often comes with entrepreneurship. It provides a tranquil path to achieving financial goals, allowing investors to sidestep the challenges of establishing their own businesses or brands.<p>The importance of investing lies in its potential to help individuals achieve various financial goals and secure their future. Here are some key reasons why investing is essential:</p><p>1. Wealth Accumulation: Investing allows individuals to grow their wealth over time by earning returns on their initial capital. These returns can come in the form of capital appreciation, dividends, or interest.</p><p>2. Beating Inflation: Inflation erodes the purchasing power of money over time. Investing in assets that typically outpace inflation helps preserve the real value of your money.</p><p>3. Financial Goals: Investing provides a means to reach specific financial goals, such as buying a home, funding education, retiring comfortably, or starting a business.</p><p>4. Diversification: A well-diversified investment portfolio can spread risk and reduce the impact of market volatility on your overall wealth. This diversification can help protect your investments during economic downturns.</p><p>5. Passive Income: Some investments, like dividend-paying stocks or rental properties, can generate passive income, which can supplement your regular earnings.</p><p>6. Retirement Planning: Investing in retirement accounts like 401(k)s or IRAs helps individuals save for retirement and ensures they have enough income to maintain their lifestyle during retirement.</p><p>7. Tax Efficiency: Certain investment strategies and accounts offer tax advantages, such as tax-deferred growth or tax-free withdrawals, which can help minimize your tax liabilities.</p><p>8. Financial Security: Investing can provide a safety net in case of unexpected expenses or emergencies, offering financial security and peace of mind.</p><p>9. Long-Term Financial Freedom: Over time, smart investing can lead to financial independence, where you can choose when and how you want to work, or if you want to retire early.</p><p>10. Legacy and Generational Wealth: Investing can be a way to build wealth that can be passed on to future generations, creating a lasting legacy for your family.</p><p>It&#39;s important to note that investing involves risks, and there are no guarantees of profits. It&#39;s crucial to educate yourself, set clear financial goals, and consider your risk tolerance when creating an investment strategy. Additionally, seeking advice from financial professionals or experts can help you make informed investment decisions.<br />&nbsp;</p><strong>Benefits of Investing early</strong><br /><br />Investing early offers several significant benefits that can have a profound impact on your financial future:<ol><li>Compound Interest: Time is a powerful ally when it comes to compounding returns. By investing early, your initial contributions have more time to grow and generate additional returns. Over the long term, this can result in exponential growth of your investments.</li><li>Wealth Accumulation: Early investments enable you to accumulate more wealth over time. Even with relatively small contributions, the compounding effect can turn them into a substantial nest egg.</li><li>Risk Tolerance: Young investors can generally afford to take on more risk because they have a longer investment horizon. This allows for a potentially higher allocation to growth assets like stocks, which historically offer greater returns over time.</li><li>Financial Security: Investing early helps build a financial safety net. Over time, your investments can provide a source of income or funds for major expenses, such as buying a home, funding education, or dealing with unexpected financial emergencies.</li><li>Retirement Planning: Early investing is key to securing a comfortable retirement. By starting early, you can save more over the years, take advantage of tax-advantaged retirement accounts, and potentially retire with a more substantial nest egg.</li><li>Financial Education: Investing early encourages financial literacy. You&#39;ll learn about different asset classes, investment strategies, and risk management, which can be valuable skills throughout your life.</li><li>Diversification: With a longer time horizon, you can diversify your investments more effectively, spreading risk across various assets to reduce the impact of market volatility.</li><li>Less Pressure: Early investing allows you to save and invest gradually over time, reducing the pressure to make large contributions or catch up on retirement savings later in life.</li><li>Peace of Mind: Knowing that you&#39;ve started building your financial future early can provide peace of mind and reduce financial stress as you age.</li><li>Flexibility: Early investments provide you with more flexibility in your financial decisions. You have the option to retire earlier, pursue other opportunities, or weather financial setbacks more easily.</li></ol>It&#39;s essential to remember that while investing early is advantageous, it&#39;s never too late to start. The most critical factor is taking that first step and consistently contributing to your investments over time. Additionally, it&#39;s wise to seek guidance from financial professionals to create a well-rounded investment strategy that aligns with your goals and risk tolerance.<br />&nbsp;<br />&nbsp;<br />&nbsp;<br /><strong>Power of Compounding</strong><br /><br />Compounding is a fundamental concept in investing, and it refers to the process by which the returns earned on an investment generate additional earnings over time. In essence, it&#39;s the snowball effect of your money working for you. Here&#39;s how compounding works in investing:<br />Initial Investment: You start by investing a sum of money, known as the principal. This can be an initial lump sum or regular contributions over time.<br /><strong>Returns: </strong>Your investments earn returns, which can come in various forms, such as interest, dividends, or capital gains. These returns are typically a percentage of your initial investment.<br /><strong>Reinvestment:</strong> Instead of withdrawing the returns, you reinvest them back into your investment portfolio. This increases the size of your investment.<br /><strong>Bigger Base:</strong> As your investment base (the original principal plus any reinvested returns) grows, the potential returns generated also increase because they are calculated as a percentage of this larger base.<br /><strong>Repeat:</strong> The process continues, with the returns earned in each period being reinvested to generate more returns in subsequent periods.<br />Over time, compounding can lead to exponential growth in your investment. The longer you allow your investments to compound, the more significant the effect becomes. This is why starting to invest early is often emphasized&mdash;it provides more time for your investments to grow through compounding.<br />The formula for calculating the future value of an investment with compounding is:<br />FV=<em>PV</em>&times;(1+<em>r</em>)^<em>n</em><br />Where:<br /><strong>FV</strong> is the future value of the investment.<br /><strong>PV</strong> is the present value or initial investment.<br /><strong>r</strong> is the annual interest rate or rate of return (expressed as a decimal).<br /><strong>n</strong> is the number of compounding periods (usually years).<br />In practice, many investments, such as stocks and bonds, don&#39;t compound on a fixed schedule like a traditional savings account. Instead, the returns can be more irregular. Nevertheless, the concept of compounding still applies, as returns generated are typically reinvested to generate more returns in the future.<br />Compounding is a powerful tool for long-term wealth building, and it highlights the importance of both starting to invest early and staying invested for an extended period to maximize its benefits.<br />&nbsp;<br />&nbsp;<br /><strong>Tax Saving:</strong><br /><br />Investing can be an effective way to save on taxes, and there are several strategies and investment vehicles that individuals can use to minimize their tax liability. Here are some common methods of tax-saving through investments:<br /><br />1. Tax-Efficient Investments:<br />Investing in tax-efficient funds or assets, such as index funds or ETFs, can help minimize capital gains taxes because these investments tend to generate fewer taxable events.<br /><br />2. Long-Term Capital Gains:<br />Holding investments for the long term (typically more than one year) can result in lower capital gains tax rates when you sell the assets. Long-term capital gains are often taxed at a lower rate than short-term gains.<br /><br />3. Tax-Loss Harvesting:<br />Selling investments with capital losses can offset gains in other investments, reducing your overall tax liability. This strategy involves carefully managing your portfolio to maximize tax benefits.<br /><br />4. Real Estate Investment Trusts (REITs):<br />REITs are required by law to distribute at least 90% of their taxable income to shareholders in the form of dividends, which are often taxed at favorable rates.<br />&nbsp;<br />It is also advisable to consult with a qualified tax professional or financial advisor to create a tax-efficient investment strategy tailored to your needs and objectives.<br />&nbsp;<br /><br /><strong>Insurance:</strong><br /><br />Insurance provides you financial support if something unexpected happens to you and your family &ndash; such as an accident, medical emergency cost due to illness, fire, or theft. Insurance provides a safety net that can help mitigate the financial impact of unexpected events or emergencies.<br /><u>Key types of insurance</u><ul><li><strong>Life Insurance</strong>&nbsp;provides financial support to your dependant family members in case of your demise.</li><li><strong>Disability Insurance</strong>&nbsp;provides income support if you meet with an accident that prevents you from carrying out your physical activities.</li><li><strong>Health Insurance</strong>&nbsp;helps you to cover the medical and hospitalisation cost due to illness or accident.</li></ul><strong>Instruments to invest in:</strong><br />Bank Deposits (Fixed/Recurring/ Savings)<br />Company Deposits<br />Post Office Savings Schemes e.g., NSS, KVP etc.<br />Life Insurance<br />Pension Schemes<br />Equities/ Stocks/ Shares<br />Mutual Funds/ SIPs<br />Debentures/Bonds<br />Derivatives (Equity/Currency)<br />Commodities Futures<br />Precious Metals (Gold/Silver/Platinum)<br />Sovereign Gold Bond<br />Real Estate etc<br />&nbsp;'
          },
          {
            label: "Facts related to investments |",
            content: '1. There is a direct linear correlation between higher education levels and superior portfolio diversification.<br /><br />2. 9 out of 10 individual traders in equity Futures and Options Segment, incurred net losses.<br /><br />3. On an average, loss makers registered net trading loss close to Rs 50000 over and above the net trading losses uncured, loss makers expended an additional 28% of net trading losses as transaction costs. Those making 15-50% of such profits as transaction costs.<br /><br />4. Household awareness of savings schemes is significantly higher than a cognizance of investment instruments. Primary motivation for investing is capital gains, closely followed by lifestyle improvement plans.<br /><br />5. Middle-income groups save more as a percentage of their annual income than the highest income groups.<br /><br />6. Clear inverse linear relationship between income and debt levels; that is, as income levels increase, debt (as percentage of income) falls.',
          },
          {
            label: "Study Material |",
            content: '<span style="font-size:18px"><strong>Why Is Financial Literacy Important?</strong></span><br /><br />&nbsp;&nbsp;&nbsp;&nbsp; Financial literacy is important because it empowers you to make informed and responsible financial decisions. It helps you understand concepts like budgeting, saving,&nbsp;investing and debt management.&nbsp;<br />It allows you to make better decisions through problem-solving, critical thinking and having a grasp of essential facts and concepts related to basic personal finance.<br />Building your financial literacy helps you create a secure future, avoid financial pitfalls and achieve your&nbsp;financial goals.<br />&nbsp;<br />&nbsp;&nbsp;&nbsp; Different Stakeholders can access official documents on financial literacy provided by RBI and GOI by clicking on following links:<ol><li>• <a href="../FL_files/FL School_Children.pdf">School Childrens</a></li><li>• <a href="../FL_files/FL Entrepreneurs.pdf">Entrepreneurs</a></li><li>• <a href="../FL_files/FL Self_Help_Groups.pdf">Self Help Groups</a></li><li>• <a href="../FL_files/FL Senior_Citizens.pdf">Senior Citizens</a></li><li>• <a href="../FL_files/FL Farmers.pdf">Farmers</a></li><li>• <a href="../FL_files/Handbook_on_Digital_Finance_for_Rural_India_English.pdf">Handbook on Digital Finance for Rural India</a></li></ol>&nbsp;<br />&nbsp;<p><strong><span style="font-size:18px">What is Financial Freedom?</span></strong></p>&nbsp;&nbsp;&nbsp; Financial Freedom means to be financially free. This can happen when your Passive Income (Income from your investments, rental income, etc) is more than your desired lifestyle.To win the money game, the goal is to earn enough passive income to pay for your desired lifestyle.<br />One should always desire to plan their finances with a context to achieve financial freedom in their lives. Having a Money Management System is equally important . Always remember, &quot;<em>The real secret of successful wealth management is that your financial future is truly in your hands&quot;.</em><br />&nbsp;<p><span style="font-size:18px"><strong>How you can become financially free?</strong></span></p>You can become financially free if you follow these points -<br /><br /><strong>&quot;UNDERSTAND&quot; where you are at</strong>&nbsp;- This means that one should be aware that at the present moment where they stand financially. It will be very difficult to become financially free if you cannot understand where you stand financially.<br /><br /><strong>Write down your &quot;GOALS&quot;</strong>&nbsp;- Once you start writing down your goals you automatically start working towards fulfilling these goals because you have now defined your goal. You know what you want to achieve financially.<br /><br /><strong>Track down your &quot;SPENDING&quot;</strong>&nbsp;- In order to achieve your goals, it is very important that you keep an eye on your spending habits. If you don&#39;t track your spending then it is very obvious that you will get swayed away and lose track or focus from achieving your financial goals.<br /><br /><strong>Pay Off &quot;DEBT&quot;</strong>&nbsp;- To become financially free one day, you will also have to become debt-free. Even if you have a debt of the slightest amount you will not be called financially free. So, pay off your all debt as soon as possible.<br /><br /><strong>&quot;CREATE&quot; additional source of Income</strong>&nbsp;- You cannot just become financially free with just one source of income because with this one source of income-you will also have to take care of another aspect of life. You cannot just ignore everything just to become financially free.<br /><br /><strong>&quot;INVEST&quot; for Future</strong>&nbsp;- You cannot simply become financially free if your entire savings are just kept in your bank account. You will have to invest in some selected financial products which can help your money multiply at a great speed. Investing in the right place can help your money grow.<br />&nbsp;<br />&nbsp;<br /><span style="font-size:18px"><strong>Money Matters:</strong></span><br /><br />&nbsp;&nbsp;&nbsp; This section provides you insights on personal finance that will help you to take control of your money and secure a better future for yourself and your family. This will cover topics such as importance of saving, inflation, benefits of the power of compounding, financial planning, retirement planning, insurance, and Estate planning.<br /><br /><strong>Who it is for</strong><br />&nbsp;&nbsp;&nbsp; It is suitable for everyone, regardless of his or her financial knowledge. However, it is particularly beneficial for those having limited financial knowledge and seeking to improve their financial literacy.<br /><br /><strong>Takeaways</strong><br />&nbsp;&nbsp;&nbsp; By the end of this section, you will have a better understanding of the following&nbsp;<strong><em>CONCEPTS OF&nbsp; PERSONAL FINANCE:</em></strong><ul><li><strong><em>Saving:</em></strong>&nbsp;Setting aside a certain portion of income to meet future financial goals.</li><li><strong><em>Financial Goal Setting:</em></strong>&nbsp;Targets that you set yourself to achieve financial objectives.</li><li><strong><em>Budgeting:</em></strong>&nbsp;Plan to save and spend your money</li><li><strong><em>Inflation and Investing:</em></strong>&nbsp;Investing helps to reduce impact of inflation.</li><li><strong><em>Debt Management:</em></strong>&nbsp;Things to keep in mind while you borrow money.</li><li><strong><em>Insurance:</em></strong>&nbsp;Protection against unforeseen events</li></ul><ul><li><strong><em>Retirement Planning:</em></strong>&nbsp;Plan-ahead for a comfortable and secure retirement.</li><li><strong><em>Estate Planning:</em></strong>&nbsp;Plan to manage to your assets after your demise.</li></ul><h3>&nbsp;</h3><h3>What is saving?</h3><strong>&nbsp;&nbsp;&nbsp; Saving</strong>&nbsp;means setting aside of a certain portion of income to meet future financial requirements. Saving is what remains from income after expenses, which can be calculated as income minus expenses.<br />Saving = Income - Expenses<br />Saving is important for securing an individual&rsquo;s financial well-being, long-term goals and financial security. It also provides a sense of peace of mind.<br />It is often stated that&nbsp;<strong>&ldquo;Don&rsquo;t save what is left after spending, spend what is left after saving.&rdquo;</strong><br />&nbsp;<h3>Why we save?</h3>There is no right time to start saving, the earlier we start the better it is.<br />Some key reasons why saving is important:<ul><li>Savings enable us to build an emergency fund to cover unexpected expenses, such as medical emergencies, business loss, etc.</li></ul><ul><li>To meet financial goals such as buying a new house, meet cost of higher education of children, planning for retirement and so on.</li></ul>&nbsp;<strong><em>So, start saving today and take the first step towards financial freedom and peace of mind.</em></strong><br />&nbsp;<br />&nbsp;<p><span style="font-size:18px"><strong>Understanding Needs, Wants and Desires</strong></span></p>&nbsp;&nbsp;&nbsp; In order to prioritize your spending and increase your savings, it is essential that one should understand the difference between needs, wants, and desires.<p><strong>Needs: </strong>Needs are necessary for survival. These are basic in nature. Examples of needs include food, water, housing, clothing, healthcare, etc.</p><p><strong>Wants:</strong> Wants are not essential for survival but enhance one&rsquo;s lifestyle and comfort. Examples include entertainment, dining out, vacations etc.</p><p><strong>Desires:</strong> Desires are strong aspirations like buying a dream luxury car, latest electronic gadgets like high-end mobile phones, etc. To satisfy desires, one may be tempted to borrow money.</p>&nbsp;&nbsp;&nbsp; If we spend too much money on our desires or wants without prioritizing, budgeting and therefore saving may become difficult. Therefore, one should prioritize the allocation of money first towards needs and then towards wants and lastly toward desires without losing focus on saving.<br /><strong>Therefore, understanding the difference between needs, wants and desires can help in prioritising spending. Neglecting needs for wants and desires can lead to financial difficulties.</strong><br />&nbsp;<p><span style="font-size:18px"><strong>Management of Income and Expenses</strong></span></p>One should manage income and expenses by creating a&nbsp;budget, tracking spending, and making informed financial decisions.<br />&nbsp;<h3>Ways to manage income and expense:</h3><strong><em>Create a budget: -&nbsp;</em></strong>Prepare a budget by outlining all sources of income (e.g., salary, bonuses, rental income etc.) and all categories of expenses (e.g., utilities bills, food expenses, entertainment). One must allocate a certain percentage of income to savings and investments regularly and be disciplined about it.<br /><br /><strong><em>Prioritise expenses: -&nbsp;</em></strong>After preparing a budget, one should prioritise expenses so as to cover basic needs first. After that, one should think of wants and desires. Unnecessary or impulse based spending should be left if budget permits.<br /><br /><strong><em>Build an Emergency Fund: -&nbsp;</em></strong>Allocate money for an emergency fund to cover unexpected expenses or financial setbacks.<br /><br /><strong><em>Invest for the future: -&nbsp;</em></strong>Set aside a specific portion of your income for investments, to meet your long-term financial goals.<br />&nbsp;<br />&nbsp;<p><span style="font-size:18px"><strong>Inflation: The General Increase in Prices</strong></span></p>&nbsp;&nbsp;&nbsp; Inflation reduces the value of money, which means that with the same amount of money, you can purchase lesser amount of goods and services than before. This happens due to general increase in prices of goods and services. For example, at an inflation rate of 6 percent per annum, an item that costs Rs. 100/- now will cost Rs. 106/- next year.<br />The below chart shows how the value of Rs. 1,00,000 will reduce over a period (5 years, 10 years, 15 years and 20 years), assuming average inflation rate of 6%.<br /><img src={inflation} /><br />&nbsp;<br />Individuals have little control over inflation. However, there are ways to reduce the adverse impact of inflation on personal finances by:<ul><li>Prioritize spending and cutting unnecessary expenses.</li><li>Diversifying your investments wisely in assets, which provides better returns than rate of inflation over the long term.</li><li>Focus on long-term investments&nbsp;that have historically performed well during inflation, such as equities, mutual funds, gold etc. Over the long term, it has been seen that these assets provide higher returns than the rate of inflation.</li></ul><strong>Therefore, Inflation is the general rise in process of goods and services over time. It reduces the value of money. It can also lead to increase in cost of living. So, Invest wisely to reduce the impact of inflation.</strong><br />&nbsp;<br />&nbsp;<p><span style="font-size:18px"><strong>Grow your money with Power of Compounding</strong></span></p>&nbsp;&nbsp;&nbsp; Compounding allows savings to grow substantially over a period of time as it involves earning interest not only on the initial amount of money (the principal) but also on the accumulated interest over a period of time. In other words, it is interest earned on the principal and accrued interest.<br />Albert Einstein once said:<strong>&nbsp;&ldquo;Compound interest is the eighth wonder of the world. He who understands it, earns it &hellip; he who doesn&#39;t &hellip; pays it&rdquo;.</strong><br />&nbsp;<br /><strong>Magic of Compounding</strong>- Growth of Rs. 1,00,000 @ 10 % per annum Compound Interest Vs Simple Interest for 20 years can be seen in the below picture.<br /><img src={compounding} /><br />&nbsp;<br />It can be observed, in compound interest, Rs. 1,00,000 has grown to Rs. 6,72,000 at the end of 20 years as compared to Rs. 3,00,000 using simple interest.<br />&nbsp;<h3>Thumb Rules of Compounding:</h3>Thumb rules that can help in understanding the power of compounding are given below:<br /><img src={rulesOfCompounding/><br />&nbsp;<br /><h1>&nbsp;</h1>&nbsp;<p><span style="font-size:18px"><strong>Financial Goals and Budgeting</strong></span></p>&nbsp;&nbsp;&nbsp; Financial goals are targets to achieve specific financial objectives within a specified timeframe. By establishing clear financial goals, one can take control of finances and work towards securing financial future.<h3>Setting financial goal</h3>A good financial goal should be&nbsp;<strong>SMART i.e. Specific, Measurable, Achievable, Realistic and Time bound.</strong><table border="0" cellpadding="0" cellspacing="0" style="width:666px"><thead><tr><th style="height:57px; width:73px">&nbsp;</th><th style="height:57px; width:183px"><strong>Description</strong></th><th style="height:57px; width:208px"><strong>Incorrect Approach</strong></th><th style="height:57px; width:202px"><strong>Right Approach</strong></th></tr></thead><tbody><tr><td style="height:88px"><strong>Specific</strong></td><td style="height:88px; width:183px">You need to know exactly what you want to achieve and when you want it.</td><td style="height:88px; width:208px">I need to set aside money for my grand daughter&rsquo;s birthday next year.</td><td style="height:88px; width:202px">I need to set aside Rs. 1,000/- for next ten months for the celebration next year.</td></tr><tr><td style="height:17px"><strong>Measurable</strong></td><td style="height:17px; width:183px">A goal should be measurable so that you know when you will achieve it.</td><td style="height:17px; width:208px">I will pay off most of my credit card dues soon.</td><td style="height:17px; width:202px">In the next six months, I will pay off all my credit card bills in disciplined manner.</td></tr><tr><td style="height:17px"><strong>Achievable</strong></td><td style="height:17px; width:183px">Your goal should be within a reasonable reach.</td><td style="height:17px; width:208px">I will save money.</td><td style="height:17px; width:202px">I will save Rs. 48,000/- every year by setting aside Rs. 4000/- every month.</td></tr><tr><td style="height:17px"><strong>Realistic</strong></td><td style="height:17px; width:183px">Your goals need to be based on available resources which you can achieve reasonably.</td><td style="height:17px; width:208px">By saving regularly, I will become a millionaire.</td><td style="height:17px; width:202px">By saving regularly, I will be debt free by January next year. If I continue saving regularly after clearing all my debt, by next December I will be saving the sufficient amount to fund six months of my living expenses.</td></tr><tr><td style="height:158px"><strong>Time-Bond</strong></td><td style="height:158px; width:183px">Goals with timelines allow you to track your progress and encourage you to keep going until you reach your goal.</td><td style="height:158px; width:208px">I will save money for my daughter&rsquo;s marriage.</td><td style="height:158px; width:202px">I will save Rs. 50,000/- every year for next 10 years for my daughter&rsquo;s marriage.</td></tr></tbody></table><h3>Budgeting</h3>Budgeting is the process of creating a plan for how you will spend your money.<br />Budgeting helps you to gain a clear understanding of your financial situation by documenting all sources of income and expenses, control spending, saving money, paying off debt and work towards your financial goals.<p><span style="font-size:18px"><strong>Plan Early for Retirement</strong></span></p>&nbsp;&nbsp;&nbsp; You should have a retirement plan in advance, so that when you retire from work, you continue to maintain the same lifestyle without worrying about expenses and inflation. A retirement plan helps you to pursue your post-retirement dreams and to secure your future.<br /><strong><em>Some tips for your retirement planning:</em></strong><ul><li>Saving early for retirement gives money more time to grow and compound. This ensures availability of a large lump sum on your retirement.</li><li>Make sure you save enough to cover unplanned expenses and emergencies. Ensure that you have adequate insurance policies to cover unforeseen events and medical emergencies to secure your family and loved ones.</li><li>It is desirable to diversify your investments across different asset class so that if one asset class does not perform, you can get returns from other asset class. Put it simply, don&#39;t keep all your eggs in one basket.</li><li>Choose your plan keeping in mind your retirement goals and lifestyle.</li></ul>You may contact a regulated financial advisor to guide you through the retirement planning process who will help you find the best retirement plans for you.<br />Therefore, Planning ahead allows you to enjoy your retirement life. So start early retirement planning to get benefits of compounding interest. So save enough money to cover unplanned expenses and emergencies. And Diversify your investments in different asset classes.<br />&nbsp;<br />&nbsp;<br />&nbsp;<p><span style="font-size:18px"><strong>Think Before you Borrow Money</strong></span></p>&nbsp;&nbsp;&nbsp; You may need to borrow money when you do not have enough savings to buy what you want or to meet expenses related to emergencies like medical needs etc. One should not take loans for meeting avoidable and unnecessary expenses. Borrowing money comes with huge financial responsibilities and potential risks.<br />&nbsp;&nbsp;&nbsp; Banks offer loans for various purpose &ndash; such as to buy car (car loan), to buy house (house loan). Loan can be secured loan or unsecured loan. With secured loan, the asset is pledged to the bank as collateral. If secured loan is not paid, the asset can be sold to recover the loan. Examples of secured loans are housing loan, car loan. In unsecured loan such as personal loans, assets are not pledged as collateral.<h3>Before you borrow</h3><ul><li>Check whether lender is regulated or licensed. Never deal with unlicensed or un-regulated lenders.</li><li>Check whether you have the capacity to repay the loan.</li><li>Compare the interest rates of various lenders. This ensures you get the lowest rate.</li><li>Check how interest is calculated: - In a flat interest rate, you&#39;re charged interest on the full principal amount you borrowed. On the other hand, in a reducing interest rate, the interest you pay goes down as it&#39;s calculated on the outstanding amount.</li><li>Depending on your ability to pay, decide on repayment period. Shorter the loan repayment period, less is overall interest paid (and vice versa).</li><li>Assess all costs such as processing fee, pre-payment charges, late payment fee, etc. before you sign loan document.</li></ul><h3>&nbsp;</h3><h3>After you borrow money</h3>Important points to keep in mind after you borrow money:<ul><li>Make your repayments on time and in full to avoid any penalties or additional charges.</li><li>Repay part or full loan early if you have spare cash &mdash; but check if there are any pre-payment charges.</li><li>Review your borrowings regularly.</li><li>Avoid borrowing too much and taking too many loans as you could be over burden.</li></ul>&nbsp;<br />&nbsp;<br /><strong>Therefore, Always be cautious and responsible while borrowing money. </strong><br />&nbsp;',
          },
          {
            label: "Quiz |",
            content: `<div class="content"><div class="container-fluid"><div class="row"><div class="col-sm-12"><div id="result" class="quiz-body"><form name="quizForm" onSubmit=""><fieldset class="form-group"><h4><span id="qid">1.</span> <span id="question"></span></h4><div class="option-block-container" id="question-options"></div> <!-- End of option block --></fieldset><button  name="previous" id="previous" class="btn btn-success">Previous</button>&nbsp;<button  name="next" id="next" class="btn btn-success">Next</button></form></div></div> <!-- End of col-sm-12 --></div> <!-- End of row --></div> <!-- ENd of container fluid --></div> <!-- End of content -->`,
          },
          {
            label: "Games |",
            content:
              "Not available",
          },
          {
            label: "Webinars |",
            content: `Visit this space to get information on various webinars/ awareness programs that are conducted by reputed organizations:<br />
			<br />
			SEBI- <a href="https://www.sebi.gov.in/search.html?searchval=webinar">https://www.sebi.gov.in/search.html?searchval=webinar</a><br />
			<a href="https://investor.sebi.gov.in/events.html">https://investor.sebi.gov.in/events.html</a><br />
			NISM- <a href="https://www.nism.ac.in/events/">https://www.nism.ac.in/events/</a><br />
			IIT- <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vRdbGOLmIhJl6_761LRi3OJgFmlSRK7C5qyY0JckLTc2Jx2d5kbMVrlgJmZ7yb4o0u-mrLDi8baEfK5/pubhtml">https://docs.google.com/spreadsheets/d/e/2PACX-1vRdbGOLmIhJl6_761LRi3OJgFmlSRK7C5qyY0JckLTc2Jx2d5kbMVrlgJmZ7yb4o0u-mrLDi8baEfK5/pubhtml</a>`,
          },
          {
            label: "Certification courses |",
            content: `There are number of certification courses that are also available to individuals who are interested in learning.<br />
			Numerous such sites may be accessed through visiting this page:<br />
			&nbsp;<br />
			1. NISM-&nbsp; <a href="https://www.nism.ac.in/certifications/">https://www.nism.ac.in/certifications/</a><br />
			<a href="https://certifications.nism.ac.in/nismaol/">https://certifications.nism.ac.in/nismaol/</a><br />
			2. Swayam Portal-&nbsp; <a href="https://swayam.gov.in/nc_details/">https://swayam.gov.in/nc_details/</a><br />
			3. NPTEL <a href="https://nptel.ac.in/">https://nptel.ac.in/</a><br />
			<a href="https://onlinecourses.nptel.ac.in/">https://onlinecourses.nptel.ac.in/</a><br />
			<br />
			<br />
			&nbsp;`
          },
          {
            label: "Souces to refer |",
            content:`Willing Individuals can always refer to books on investments.<br />Few of such great books are listed here:<br /><br />1. Principle of Corporate Finance- &nbsp;<a href="https://www.amazon.in/Principles-Corporate-Finance-Richard-Brealey/dp/9353163633/ref=sr_1_2?crid=2ZZZFK7ZT8J0I&amp;keywords=principles+of+corporate+finance+brealey%2C+myers%2C+allen&amp;qid=1694076687&amp;sprefix=principles+of+corpo%2Caps%2C233&amp;sr=8-2">https://www.amazon.in/Principles-Corporate-Finance-Richard-Brealey/dp/9353163633/ref=sr_1_2?crid=2ZZZFK7ZT8J0I&amp;keywords=principles+of+corporate+finance+brealey%2C+myers%2C+allen&amp;qid=1694076687&amp;sprefix=principles+of+corpo%2Caps%2C233&amp;sr=8-2</a><br type="_moz" /><a href="https://www.flipkart.com/principles-corporate-finance/p/itmfbrpz4tuhemqe">https://www.flipkart.com/principles-corporate-finance/p/itmfbrpz4tuhemqe</a><br /><br />2. BEHAVIORAL FINANCE by H.Kent Baker and John R. Nofsinger- <a href="https://www.amazon.in/Behavioral-Finance-Investors-Corporations-Markets/dp/0470499117/ref=sr_1_2?crid=NH9OWS6BMCNB&amp;keywords=behavioral+finance+kent+baker&amp;qid=1694604254&amp;sprefix=behavioral+finance+by+bake%2Caps%2C629&amp;sr=8-2">https://www.amazon.in/Behavioral-Finance-Investors-Corporations-Markets/dp/0470499117/ref=sr_1_2?crid=NH9OWS6BMCNB&amp;keywords=behavioral+finance+kent+baker&amp;qid=1694604254&amp;sprefix=behavioral+finance+by+bake%2Caps%2C629&amp;sr=8-2</a><br type="_moz" />&nbsp;<br />&nbsp;3. The Intelligent Investor- <a href="https://www.amazon.in/Intelligent-Investor-English-Paperback-2013/dp/0062312685/ref=sr_1_2?crid=2E2TML03WV0NZ&amp;keywords=the+intelligent+investor+by+benjamin+graham+english&amp;qid=1694076778&amp;sprefix=the+intelligent+investor+by+benjamin+graham+english%2Caps%2C334&amp;sr=8-2">https://www.amazon.in/Intelligent-Investor-English-Paperback-2013/dp/0062312685/ref=sr_1_2?crid=2E2TML03WV0NZ&amp;keywords=the+intelligent+investor+by+benjamin+graham+english&amp;qid=1694076778&amp;sprefix=the+intelligent+investor+by+benjamin+graham+english%2Caps%2C334&amp;sr=8-2</a><br type="_moz" />&nbsp;<br />4. Psychology of Money- <a href="https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_2_sspa?keywords=the+intelligent+investor+by+benjamin+graham&amp;qid=1694076644&amp;sprefix=the+intell%2Caps%2C220&amp;sr=8-2-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1">https://www.amazon.in/Psychology-Money-Morgan-Housel/dp/9390166268/ref=sr_1_2_sspa?keywords=the+intelligent+investor+by+benjamin+graham&amp;qid=1694076644&amp;sprefix=the+intell%2Caps%2C220&amp;sr=8-2-spons&amp;sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&amp;psc=1</a><br type="_moz" />&nbsp;<br />&nbsp;5. Rich Dad Poor Dad- <a href="https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?crid=2DQ8VRWYY9KPL&amp;keywords=rich+dad+poor+dad+book&amp;qid=1694076884&amp;sprefix=rich+dad%2Caps%2C353&amp;sr=8-3">https://www.amazon.in/Rich-Dad-Poor-Middle-Anniversary/dp/1612681131/ref=sr_1_3?crid=2DQ8VRWYY9KPL&amp;keywords=rich+dad+poor+dad+book&amp;qid=1694076884&amp;sprefix=rich+dad%2Caps%2C353&amp;sr=8-3</a><br type="_moz" /><br /><br /><br />&nbsp;`,
          },
          {
            label: "Social media handlers",
            content: `Always visit original Social Media handle pages rather than following or subscribing to unauthorized social media influencers in order to save yourself from falling into the trap of false or paid information.<br />
			<br />
			1. Nism- <a href="https://twitter.com/NISM_Official">https://twitter.com/NISM_Official</a><br />
			<a href="https://www.facebook.com/nismindia/">https://www.facebook.com/nismindia/</a><br />
			- <a href="https://www.instagram.com/nism_official/">https://www.instagram.com/nism_official/</a><br />
			<a href="https://in.linkedin.com/school/national-institute-of-securities-markets-nism-/">https://in.linkedin.com/school/national-institute-of-securities-markets-nism-/</a><br />
			&nbsp;<br />
			2. SEBI- <a href="https://twitter.com/SEBI_news">https://twitter.com/SEBI_news</a><br />
			<a href="https://www.facebook.com/sebi.gov.in/">https://www.facebook.com/sebi.gov.in/</a><br />
			<a href="https://in.linkedin.com/company/sebi">https://in.linkedin.com/company/sebi</a><br />
			&nbsp;`,
          },
      ];

    const clicked = () => {
        const menu = document.querySelector(".mobile-menu");
        menu.classList.toggle("hidden");
      }

    const [activeTabIndex, setActiveTabIndex] = useState(0);

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
                            <a href="/general" className="py-4 px-2 text-green-500 font-semibold border-b-4 border-green-500">General</a>
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
                        <li ><a href="/" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300 font-semibold">Home</a></li>
                        <li className="active"><a href="#" className="block text-sm px-2 py-4  text-white bg-green-500">General</a></li>
                        <li><a href="#" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Personalized</a></li>
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

export default GeneralPage;