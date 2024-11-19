import Cards from './Components/Cards';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import PricePlans from './Components/PricePlans';


function App() {
  let logo1=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
</svg>;
let logo2=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
</svg>;
let logo3=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
</svg>



  let navItems=["home","features","pricing","blog","contact"];
  let cardArr=[{text1:"80%",text2:"of Users Save More Each Month",text3:"Our AI-powered budgeting tools help users save an average of 20% more by identifying areas for spending reduction."},{text1:"$1.6M +",text2:"Saved in Goals",text3:"Payble users have collectively saved over half a million dollars toward their financial goals, from vacations to emergency funds."},{text1:"95%",text2:"of Users Report Less Financial Stress",text3:"With real-time tracking and personalized financial insights, all our users experience greater peace of mind with their finances."},{text1:"2.8M +",text2:"Transactions Tracked",text3:"Payble has helped users monitor over a million transactions, giving them full visibility and control over their spending habits."}];
  let card2Arr=[{head:"Problems",logo:[logo1,logo2,logo3],li1:"Struggling to track all your expenses in one place?",li2:"Overspending without realizing it?",li3:"Difficult to save for long-term goals?"},{head:"Handle",logo:[logo1,logo2,logo3],li1:"Managing multiple accounts can feel overwhelming.",li2:"Without real-time updates, it's easy to lose track of spending.",li3:"Saving for long-term goals requires consistency and planning."},{head:"Solutions",logo:[logo1,logo2,logo3],li1:"Payble integrates all your accounts in one dashboard.",li2:"Receive real-time alerts when you're approaching your budget limits.",li3:"Set custom savings goals and let AI automate the path to reaching them."}];
  let priceArr=[{btn:"BASIC - FREE",income:"$0",month:"/month",time:"- paid monthly",text:"Ideal for Beginners getting started with budgeting.",btn2:"get this plan",list:["Expense Tracking","Single Account Sync","Basic Budgets","1 Savings Goal","Payment Reminders","Email Support"]},{btn:"PLUS - POPULAR",income:"$10",month:"/month",time:"- paid monthly",text:"For Users who want deeper insights into their finances.",btn2:"get this plan",list:["Unlimited Account Sync","Advanced Budgets","5 Savings Goals","AI Insights","Real-Time Alerts","Monthly Reports","Priority Support"]},{btn:"PREMIUM",income:"$20",month:"/month",time:"- paid monthly",text:"Ideal for Advanced users or business owners.",btn2:"get this plan",list:["All Plus Features","Unlimited Savings Goals","Financial Forecasting","Custom Reports","Expense Breakdown","Real-Time Insights","24/7 Support","data export"]}];

  let qArr=["How do I link my bank accounts to Payble?","Is Payble secure to use with my financial information?","Can I set multiple savings goals?","How do real-time budget alerts work?","Can I use Payble with multiple accounts and credit cards?","What insights does Payble provide about my spending?","Is there a free version of Payble?","How do automated savings work?"];
  let ansArr=["To link your bank accounts, simply go to the Accounts section in the app, select Add Account, and follow the secure authentication process. Payble supports most major banks and credit cards, making it easy to integrate your financial data.","Yes, Payble uses bank-level encryption to ensure your financial data is safe and secure. We never store your login credentials and adhere to the highest security standards to protect your information.","Absolutely! Payble allows you to create and manage multiple savings goals at once. You can track your progress for each goal and even automate transfers to reach them faster.","Payble’s real-time budget alerts notify you instantly when you’re approaching or exceeding your set budget limits. These alerts help you adjust your spending and stay on track with your financial goals.","Yes, Payble supports multi-account syncing, so you can track all your bank accounts, credit cards, and payment apps in one place. This gives you a complete overview of your financial health.","Payble offers AI-driven insights into your spending habits, helping you understand where your money is going and suggesting ways to optimize your budget. You’ll also receive personalized recommendations to save more effectively.","Yes, Payble offers a free version that includes basic features like expense tracking, single account syncing, and simple budgeting tools. For advanced features like multi-account syncing, AI insights, and automated savings, you can upgrade to our Plus or Premium plans.","With Payble, you can set up automated savings transfers based on your custom savings goals. Simply choose how much and how often you want to save, and Payble will take care of the rest, ensuring consistent progress toward your goals."];
  
  return (
    <div className="">
    <Navbar navItems={navItems}/>
    <Header/>
    <Cards cardArr={cardArr} card2Arr={card2Arr}/>
    <PricePlans priceArr={priceArr} qArr={qArr} ansArr={ansArr}/>
    </div>
  );
}

export default App;
