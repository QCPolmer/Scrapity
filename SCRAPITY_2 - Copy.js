// -----SCAN_COLLUMN_SCRIPT   STORES_DATA_IN_BROWSER_PAGE-------
// ----------------------------------------------------------
// ---------RUN(SCAN) DAILY ON PAGES, CAN GET WEEKLY READOUTS/SAVES------
// -------------- DELS ENTRIES AFTER 45 DAYS, STORES AS 1st ENTRY DATE----
//
// -----------------------------USAGE:--------------------------------
// --------IN BROWSER, cntrl+shift+(k firefox, j edge, j chrome(?))
// -----------PASTE SCRIPT TO CONSOLE, keep running script across pages
// -----------	(once pasted and executed, 'up' should bring it back...)
// -----------	(script handles linking)
// -----------	CAN ONLY PULL/SCRAPE DATA ON SAME DOMAIN: 
// -----------		SCRAPING FROM MULTIPLE DOMAINS OK, BUT CANT SHARE 
// -----------			DATA, MUST BE ON DOMAIN TO READ/BACKUP!!!
// -----------  DODGE: vpn-site/textise!!! (shares same domain!)
// ---------------------------------------
// NOTE: for a 'black-list': did NOT update dates of repeat items:
// 	MEANING, until they are purged after X days automatically,
// 	they will NOT have dates updated, (so will not have to re-screen)
// 	--- This is so I don't keep re-screening same 20 stocks that
// 	ALREADY FAILED!!! 
//--- backup can be done on any page on domain, 
//	for changing var to save to, run the applicable cmd!

var globalThis = this;

var myAUTO_DELETE_ENTERIES_THIS_MANY_DAYS_OLD= 45;

//autosaves everything with this prefix
var __MY_AUTOSAVE__ = "__MY_AUTOSAVE__";
var MYGLOBAL_AUTOSAVE_VARNAME_N_PREFIX = __MY_AUTOSAVE__;

var NO_PATTERN_YET= -1;

//---TESTING- STOPS TECH: 'last day rule'-(BRANDT) breakout-day 'low'
//	(he recommended reduce position size if gap big, I'd rather avoid)
//---FAVE STOP METHOD--- sell 1/2-ish at profit ASAP, 
//		use to cover risk (gives a fat stop, risk free. )  
//---COMPOUND- 2x for adding to position, 1/2 for scaling down
//	(\w general trades too, AFTER giving room after profits)  
//--- STOCK-CSV-LIST POSTED ON 'spy' DETECTION FIELD,
//	-- USE WITH MAIN SCREENER SITE TO SCREEN FOR BUY POINTS (weekly)
//


//////////////////////////////////////////////////////////////////
////////////// LONG TERM NO -FIXED- STOP(sell if wrong/hopeless): ////
/////// LEAPS OTM LONG DATED ////STARTING AS A 'HEDGE' (tlt,BIL hedege)
////////////////////////////
// LEAPS for long term seem to be best-bet 
// 	-- (MUST by at LOW VOLATILITY)
// 	-- this is inherantly directional.
// 	-- better, get something that pays a dividend, 
// 		buy protective puts, hopefully it covers most of 
// 		LEAP cost. (this way, if bought ATM, profits start
// 			at 50% per stock movement, vs OTM's crazy ramp)


var BREAKOUTS_CUR_TRADES=[
//{ticker:"IEF", hi:98, lo:95.85}, //EARNINGS DATE, CERTAINTY#, NOTES, 
{ticker:"SPY", hi:691.66, lo:650} // HI/ LO = (price target/stop)
//{ticker:"SPY", hi:100.0, lo:93.8,buy:95.32} // 3/4 EARNINGS, 8/10certainty
];
///////////////////////////////////////////////////////
//// WINS/LOSSES FOR :b: SWING TRADE:b: (X win/O-lose -EG: XooxxO
//	(left hand (4k) is INIT BUY IN AMOUNT!!!)
//-----------(started 2025, start again 2026)------
//	(4k) SWING(AllTimeHi) 	--- 
//	(4k) SWING(cheat) 	--- 
//	(4k) SWING(power play) 	--- 
//////////////////////////////////
// CHECK STOCK-SCREENER CHECKLIST BEFORE BUYING!!! 
// 	   ----REMOVE @ 15% DROPS---
// 	   ---- CHEER SELF ON FOR WINS!!!!(helps reinforce)-------
var BREAKOUTS_SEL_STOCKS= [ //SET to breakouts, see charts. 
				//(check with 'technical' charting tab)
//{ticker:"SPY", hi:NO_PATTERN_CHECK_BACK_LATER, lo:-1},  //STOP, EARNINGSDATE, CERTAINTY#, NOTES, 
{ticker:"SPY", hi:NO_PATTERN_YET, lo:-1} // xx  /// MARCH 4/ 94.5 
];

///////////////////////////////////////////////////////
//// WINS/LOSSES FOR :b: INDEX TRADE :b: (X win/O-lose -EG: XooxxO
//	(left hand (1k) is INIT BUY IN AMOUNT!!!)
//-------------------------------
//---TESTING- for STOPS: 'last day rule'-(BRANDT) breakout-day 'low'
//----- TODO: see about bandt's buy point (head shouldres breakout?)
//--------- 	END OF DAY important price point!
//---------	EXPECT- 15-40% win rate (will go around in that range)
//---------			(closer to lower end)
//----- BRANDT-ISH STYLE-  ---------HUGE--------
//-----		PRICE TARGET IS HEIGHT OF FORMATION -MINIMUM-
//-----		(BIGGER FORMATIONS BETTER FOR THIS!!!, 
//-----			AVOID TINY PATTERNS! CHECK FIRST!)
//-----	-- UPDATE EVERY --OTHER-- week (maybe 1x a month?)
//--------------------------
// (1k)	SPY DITM 	----
// (1k)	MEAN REVERSION(RSI--
// 	( above AGAINST market direction)
// (1k)	MEAN REVERSION 	----
// 	(this mean reversion is for between res-levels of pattern)
// (1k)	vol-contract(TRINGL-
// 	(price target-highest height of triangle, HORIZNTL RESISTANCE LINE)
// (1k) H & S		----
// 	(price target-height of formation, HORIZNTL RESISTANCE LINE)
// 	(head (can be 2-3 heads) and shoulders, SHOULDERS UNDER HEAD,
// 		 BREAKOUT PAST SHOULDERS, go HORIZNTL RESISTANCE LINE)
// (1k) rectangle	----
// 	(price target-highest height of triangle, HORIZNTL RESISTANCE LINE)
//////////////////////////////////
var BREAKOUTS_ON_INDEXES=[//SET to 55-day hi-low(2 months-weekly (ROUGHLY))
	  //(7-sticks, 52 wk hi/lo MAY be 1 level,PICK RESISTANCE LEVELS?)
	  //SYSTEM 2 turtle trader(check with 'TA' charting tab)
	  //----------BELOW- after JSON, comment-buy/stops/etc ONCE BOUGHT
//{ticker:"SPY", hi:691.66, lo:650}, //STOP, CERTAINTY#, NOTES,  
{ticker:"SPY", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, //STOP, CERTAINTY#, NOTES,  
{ticker:"TLT", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, //STOP, CERTAINTY#, NOTES,
{ticker:"GLD", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, 
{ticker:"LTPZ", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"XLB", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"XLF", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, 	
{ticker:"XLV", hi:159, lo:153}, 	
{ticker:"XLK", hi:152, lo:134.5},
{ticker:"XLE", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, 	
{ticker:"XLC", hi:120, lo:116.15}, 	
{ticker:"XLY", hi:124, lo:117}, 	
{ticker:"XLRE", hi:42.95, lo:39.7}, 	
{ticker:"XLY", hi:125.07, lo:118.27}, 	
{ticker:"XLI", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, 	
{ticker:"SMH", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"IYT", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"IBB", hi:179, lo:165},
{ticker:"XLP", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}, 	
{ticker:"DBA", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"BITO", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET}
];

/////////////////////////////////
//// BRANDT TRADER COMMODITIES (save sugar,coffee,coco, rest in indexs)
//	left hand side (1k) inital buy in amount
/////////////////////////////////// 
// -- MARK RESULTS ON ABOVE STOCK POOL, SAME FORMATIONS!
var BREAKOUTS_ON_TURTLE_TRADE=[ //put at 55-DAY hi-lo (7-8 sticks weekly)
{ticker:"IEF", hi:97.8, lo:95.45}, //STOP, CERTAINTY#, NOTES,  
{ticker:"CANE", hi:10, lo:9.1},
{ticker:"SIVR", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"CPER", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"USO", hi:60, lo:83.9},
{ticker:"UNL", hi:9.04, lo:6.7}, 
{ticker:"UGA", hi:70.3, lo:60.30},
{ticker:"FXF", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"FXB", hi:132.25, lo:125.6}, 
{ticker:"FXY", hi:NO_PATTERN_YET, lo:NO_PATTERN_YET},
{ticker:"FXC", hi:72.2, lo:69.09}
];

/////////////////////////////
/// :b:SCRAPING PIPE:b: (using one screener-page format, simplifies things)
//////////////////////////
var SET_ON_RUN=null; //rewrites on runtime
var PIPE_OUT="PO-adfAFasdfjasld23289234"; //needed if making pipes early...
// ONLY pipe used... taylored to ONE page format. (technical)
var  MY_PIPE_PAGE_SCRAPE_INPUT_NUMB_ROWS_TO_PULL = 
	//INPUT- number of rows to pull on page. 
	[  ["ROWS_MAP", {//BELOW ARE: myScrapeTable_of_col CONFIGs, 
	  ticker:[ "setOnRun", "No.", "\n\n\n", "\t\n", 1,0, SET_ON_RUN],
	  price:[ "setOnRun", "No.", "\n\n\n", "\t\n",10,0,SET_ON_RUN],
	  rsi:  [ "setOnRun", "No.", "\n\n\n", "\t\n", 9, 0,SET_ON_RUN],
	  _20sma: [ "setOnRun", "No.", "\n\n\n", "\t\n", 4, 0,SET_ON_RUN],
	  _50sma:[ "setOnRun", "No.", "\n\n\n", "\t\n", 5,0,SET_ON_RUN]},
	   function(a,c){ a=a.concat(); a[6] = c; //setting numb to pull
		return myScrapeTable_of_col( document.body.innerText, a);},
	   PIPE_OUT],        // data scraped, changing it to rows... 
	// rearranging above to ROWS...
	["ROWS_ADD_MULTI_FROM_OBJ_OF_LISTS",[], PIPE_OUT],     
	//add 'date' (current date)
	["ROWS_MAP", PIPE_OUT, function(a){ 
		a.date=	my_todaysDate_to_numeric_date(); return a; }],
	//clean 'ticker','price', 'rsi', '_50sma', '_20sma', 
	["ROWS_MAP", PIPE_OUT, function(a){ 
		a.ticker = a.ticker.toUpperCase().split("/")[0].trim();
		a.price= parseFloat( a.price.split("%")[0]); 
		a._20sma= parseFloat( a._20sma.split("%")[0]); 
		a._50sma= parseFloat( a._50sma.split("%")[0]); 
		a.rsi= parseFloat( a.rsi.split("%")[0]); 
		return a;}]  ];


///////////////////////////////////////////
////////////// :b:SETTUP CAROSOL:b:
///////////////////////////////////////
var carosole_urls_n_scripts_to_run={};
carosole_urls_n_scripts_to_run[
	"https://finviz.com/screener.ashx?v=170&s=ta_topgainers" ] = 
	async function(){ await myMakeFinviz_page_scraper( 6, //number rows to pull
	    __MY_AUTOSAVE__+"finviz_penny_stocks");};

carosole_urls_n_scripts_to_run[
	"https://finviz.com/screener.ashx?v=170&p=w&f=an_recom_buybetter,fa_netmargin_pos,geo_usa,sh_price_o15,ta_highlow52w_a30h,ta_rsi_nos50,ta_sma20_pa,ta_sma200_sb50,ta_sma50_sb20&o=-rsi" ] = 
	async function(){ await myMakeFinviz_page_scraper( 20, //number rows to pull
	    __MY_AUTOSAVE__+"finviz_swing_trade"); }

//repeated below, added here cause need it here...
function ROWS_GET_COL(getR, getN){var tmpO =[];// getRowList, getCOLName 
  for(var i=0;i< getR.length; i+=1){tmpO.push(getR[i][getN]);}return tmpO;}

carosole_urls_n_scripts_to_run["https://finviz.com/screener.ashx?v=170&t="
	+ ROWS_GET_COL(BREAKOUTS_ON_INDEXES, "ticker").join(",") ]= 
	async function(){ await myMakePipeBreakoutDetect(
		 BREAKOUTS_ON_INDEXES )};

carosole_urls_n_scripts_to_run["https://finviz.com/screener.ashx?v=170&t="
	+ ROWS_GET_COL(BREAKOUTS_SEL_STOCKS, "ticker").join(",") ]= 
	async function(){ await myMakePipeBreakoutDetect(
		BREAKOUTS_SEL_STOCKS )};

carosole_urls_n_scripts_to_run["https://finviz.com/screener.ashx?v=170&t="
	+ ROWS_GET_COL(BREAKOUTS_ON_TURTLE_TRADE, "ticker").join(",") ]= 
	async function(){ await myMakePipeBreakoutDetect(
		BREAKOUTS_ON_TURTLE_TRADE )};

carosole_urls_n_scripts_to_run["https://finviz.com/screener.ashx?v=170&t="
	+ ROWS_GET_COL(BREAKOUTS_CUR_TRADES, "ticker").join(",") ]= 
	async function(){ await myMakePipeBreakoutDetect(
		BREAKOUTS_CUR_TRADES )};


////////////////////////////////////////
/////////////// END CONFIGURE
////////////////////////////////////////

// :b:myMakeFinviz_page_scraper:b:
async function myMakeFinviz_page_scraper( getNumberToPull, getGlobalVarKeyName){
	////////////////////////////////
	// scraping...
	var tmpRows= await pipe_( getNumberToPull, 
		MY_PIPE_PAGE_SCRAPE_INPUT_NUMB_ROWS_TO_PULL);
	//clearing rows if unneeded. 
	if(null==prompt("cur tickers-'cancel' to cancel adding...",
			ROWS_GET_COL(tmpRows, "ticker" ).join(" ") )){
		tmpRows= []; }
	///////////////////////////////////////
	//Filtering and adding to globalThis vars:
	//	(ALSO HANDLES SAVE VAR:)
	myGlobalVars_restore();
	if(globalThis[getGlobalVarKeyName] == null){
		globalThis[getGlobalVarKeyName] = []; } 	

	tmpRows = ROWS_FILTER( tmpRows, 
			function(a,c){ 
			  if(c[a.ticker]==undefined){return 1;}return 0;},
			
			ROWS_GROUPBY(globalThis[getGlobalVarKeyName],
				"ticker"));
	globalThis[getGlobalVarKeyName] = 
		globalThis[getGlobalVarKeyName].concat(tmpRows);
	////////////////////////////
	// delete old, update saved vars
	globalThis[getGlobalVarKeyName]=
		ROWS_FILTER( globalThis[getGlobalVarKeyName], 
			function(a){ if( myCalculateDays_fromNow(a.date) <
	  myAUTO_DELETE_ENTERIES_THIS_MANY_DAYS_OLD){return 1;}return 0;});
	
	myGlobalVars_save();
	////////////////////////////////
	//next up, option to display, then save-to-text thingy...
	var tmpNumbDays = prompt(
			"type in number of days to pull data" +
			"(Blank==none)"+
			"\n (2 inputs, space separate)" + 
			"\n (max#_of_days min#_of_days(OPTIONAL)");
	if(tmpNumbDays != null){ tmpNumbDays = tmpNumbDays.trim();}
	if(tmpNumbDays != "" && tmpNumbDays != null){
		var tmpConfMinMax={max:parseInt(tmpNumbDays.split(" ")[0]),
			  min:parseInt(tmpNumbDays.split(" ")[1]|| "-1") };
		var tmpRows2 = ROWS_FILTER(globalThis[getGlobalVarKeyName], 
		  function(a, c){var tmpD =myCalculateDays_fromNow(a.date);
		    if(tmpD>= c.min && tmpD<= c.max){
			return 1} return 0 }, 
			tmpConfMinMax);
		prompt("here are the items:",ROWS_GET_COL(
			tmpRows2,"ticker").join(" "));
	}
}

// :b: myMakePipeBreakoutDetect:b:
async function myMakePipeBreakoutDetect(getBreakout_sel_stocks){
	//scraping... 
	var tmpRows= await pipe_( getBreakout_sel_stocks.length, 
		MY_PIPE_PAGE_SCRAPE_INPUT_NUMB_ROWS_TO_PULL);

	///////////////////////////////////
	// View RSI extremes:
	var txtStart = "__MAKE_NOTES_IN_INPUT_BOX__\nRSI>70 OR <30--\n";
	txtStart = ROWS_REDUCE( tmpRows, 
		function(acc, a2){ var tmpRSI = parseFloat(a2.rsi);
		  if( tmpRSI > 70 || tmpRSI <30){
		return acc+"--------->"+
			a2.ticker+"--rsi: "+a2.rsi+"\n";}else{
		return acc+"NO_EXTREME: "+a2.ticker+"--rsi: "+a2.rsi+"\n";}}
			, txtStart);
	prompt(txtStart); 

	///////////////////////////////////
	// SPY (if available) test for buy/sell state:
	var tmpTs = "__MAKE_NOTES_IN_INPUT_BOX__:\n"+
		ROWS_MAP(tmpRows, function(a){ return a.ticker;}
			).join(",") + "\n\n";
	var a_spy=ROWS_GROUPBY(tmpRows,"ticker")["SPY"];
	if(a_spy==null){ prompt(tmpTs + "no SPY ticker found..."); 
	}else{ if(a_spy[0]._20sma < a_spy[0]._50sma){
		   prompt( tmpTs+
		    "====SPY \n\n+++++++ BUY ++++++++\n\nSIGNAL" 
		     +"(verify with 50/10sma, I think)"
		     +"\nusing:gain-20/50 sma-- "+
			a_spy[0]._20sma+"/"+a_spy[0]._50sma);
		}else{prompt( tmpTs+
		     "====SPY\n\n --------SELL------\n\nSIGNAL" 
		     +"(verify with 50/10sma, I think)"
		     +"\nusing:gain-20/50 sma-- "+
			a_spy[0]._20sma+"/"+a_spy[0]._50sma);}
	}
	//////////////////////////////////
	//disps User_defined breakouts (inputs config tickers, see below)
	
	var b =ROWS_GROUPBY(getBreakout_sel_stocks,"ticker");
	var txtStart= "__MAKE_NOTES_IN_INPUT_BOX__\n"+
		"Index_breakouts(price/high/lo):\n";
	txtStart = ROWS_REDUCE( tmpRows, 
		function(acc, a2, bkouts){
		   if(bkouts[a2.ticker] == undefined){
		      return acc+"NOT IN BREAKOUT-DATA: "+a2.ticker+"\n";} 
		   var a2_in_bkouts = bkouts[a2.ticker][0]; 
		   if((a2.price > a2_in_bkouts.hi && 
				    a2_in_bkouts.hi != NO_PATTERN_YET) || 
				(a2.price < a2_in_bkouts.lo && 
				    a2_in_bkouts.lo != NO_PATTERN_YET) ){
			  return acc+"=====>FOUND -CHECK REL VOLUME!<====\n"
				+"----> "+a2.ticker+" price:"+a2.price+
			     " / "+a2_in_bkouts.hi+" / "+a2_in_bkouts.lo+
			     "\n";
		   }else{return acc+"NO_BREAKOUT: "+a2.ticker+
			" price:"+a2.price+
			" / "+a2_in_bkouts.hi+" / "+a2_in_bkouts.lo+"\n";}}
		,txtStart, b);
	prompt(txtStart); 
}

/////////////////////////////////
/// :b: SAVING/LOADING :b: (pulling all vars with prefix __MY_AUTOSAVE__
/////////////////////
//ALSO IN ROWS, adding here too for portability
function ROWS_IS_STRING_A_JSON( getJSON ){ 
	try{ JSON.parse(getJSON); return 1;}catch(e){ return 0;}}

function myGlobalVars_save(){
	var tmpKeys = ROWS_FILTER( Object.keys(globalThis), 
	     function(a, c){if(a.indexOf(c) == 0){return 1;} return 0;},
	     MYGLOBAL_AUTOSAVE_VARNAME_N_PREFIX);
	var tmpVar = {}; for(var i=0; i<tmpKeys.length; i+=1){
		tmpVar[tmpKeys[i]] = globalThis[tmpKeys[i]] }
	localStorage.setItem( MYGLOBAL_AUTOSAVE_VARNAME_N_PREFIX, 
			JSON.stringify( tmpVar)); }
function myGlobalVars_pullSavedAsString(){
	return localStorage.getItem(MYGLOBAL_AUTOSAVE_VARNAME_N_PREFIX); }
function myGlobalVars_restore(getLoad_from_JSON_not_localStorage_OPTIONAL){
	if(getLoad_from_JSON_not_localStorage_OPTIONAL != null){
		var tmpOut = getLoad_from_JSON_not_localStorage_OPTIONAL;
	}else{  var tmpOut = myGlobalVars_pullSavedAsString(); } 
	if(tmpOut == null){ //not yet defined..
		console.log("WARNING- saved data not found, skipping "+
			"\n at myGlobalVars_restore(...)..."); 
		return; }
	if( !ROWS_IS_STRING_A_JSON(tmpOut)){
		return prompt("in myGlobalVars_restore-invalid JSON...")};
	var tmpOut = JSON.parse(tmpOut);
	var tmpKeys= Object.keys(tmpOut);
	for(var i=0; i< tmpKeys.length; i+=1){
		globalThis[tmpKeys[i]] = tmpOut[tmpKeys[i]]; } }
/* COPY NEXT FUNCTION, THEN CAN TEST OUT:
myScrapeTable_of_col(
	 {startTxt:"No.", newRowItterator_txt:"\n\n\n",
		collItterator_txt:"\t\n", colNumber:1,
		row_start_number_OPTIONAL:1, row_end_number_OPTIONAL:5 });
*/
//scrapes document USE ABOVE WITH 'CONFIGS' (easier!)
//	:b:myScrapeTable_of_col:b:
function myScrapeTable_of_col( 
	getPageTxt_or_txt_in,
	getStartTxt_OR_config_list_or_obj, 
	//next params are OPTIONAL/DO NOTHIGN if the first is an obj/ list:
	getNewRowItterator,  getCollItterator, getColNumber, 
	getRow_start_number_OPTIONAL, getRow_end_number_OPTIONAL ){
	/////////////////HANDLING CONFIGS/CONFIGLISTS...
	var c = getStartTxt_OR_config_list_or_obj; 
	if( typeof c == "object"){
	  if( Array.isArray(c) == false ){ c =
		[ "", c.startTxt, c.newRowItterator_txt,
			c.collItterator_txt, c.colNumber,
		c.row_start_number_OPTIONAL, c.row_end_number_OPTIONAL ];}
	  c=c.concat();
	  c[0]= getPageTxt_or_txt_in;
	  return myScrapeTable_of_col.apply({}, c );} //
	/////////////
	// REST IS IF TEXT IS STRING!!!
	var getStartTxt = getStartTxt_OR_config_list_or_obj; 
	var tmp_ret_list= [];
	var tmp_table = getPageTxt_or_txt_in.split(getStartTxt)[1]
				.split(getNewRowItterator);
	for(var i=0; i< tmp_table.length; i+=1){
		tmp_table[i] = tmp_table[i].split(getCollItterator); }
	

	var tmpStart = getRow_start_number_OPTIONAL || 0;
	var tmpEnd = getRow_end_number_OPTIONAL || tmp_table.length;
	for(var i =tmpStart; i< tmpEnd; i+=1){
	  if( getColNumber >= tmp_table[i].length ){ break;}//off table?
	  tmp_ret_list.push( tmp_table[i][getColNumber].trim() );  }
	
	return tmp_ret_list;
}


//returns index, or obj-key :b: prompt_get_obj_keys :b:
function prompt_get_obj_keys( getInitPromptTxt, getObjOrList,
		getCanReturnNull_OPTIONAL ){
	var tmpValidChoices = []; var tmpReturnChoices=[];
	var tmpDispChoice = [];
	var TMP_CHOICES = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJK".split("");
	
	if(Array.isArray(getObjOrList)){
		for(var i=0; i< getObjOrList.length; i+=1){
			tmpReturnChoices.push( getObjOrList[i] ); 
			tmpValidChoices.push(TMP_CHOICES[i]);
			tmpDispChoice.push(TMP_CHOICES[i] + ":" + 
				getObjOrList[i]); }
	}else{ //is Obj
		tmpReturnChoices = Object.keys(getObjOrList);
		for(var i=0; i< tmpReturnChoices.length; i+=1){
			tmpValidChoices.push(TMP_CHOICES[i]);
			tmpDispChoice.push(TMP_CHOICES[i] + ":" + 
				tmpReturnChoices[i]);}
	}
	var getPrompt=null; var getCancelTxt= "";
	if(getCanReturnNull_OPTIONAL){getCancelTxt= " (or Cancel/esc)";}
	while( -1 == tmpValidChoices.indexOf(  getPrompt ) ){
		getPrompt = prompt(getInitPromptTxt+ 
				"\n--Enter a letter"+getCancelTxt + ":\n"+
				tmpDispChoice.join("\n"));
		if(getCanReturnNull_OPTIONAL &&
			getPrompt == null){ return null;}  }
	return tmpReturnChoices[tmpValidChoices.indexOf(  getPrompt )];
}
//////////////////////////////////////
//:b: date/calender functs :b:
// FORMAT: year month.day -> 202505.15 == 2025 05 . 15
function my_todaysDate_to_numeric_date(){ var tmpDate = new Date();
	return "" +(tmpDate.getFullYear() ) + "-" + 
		(tmpDate.getMonth() + 1) +"-"+ (tmpDate.getDate()); }
//dates should be:"2000-3-30" type strings
//https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
function myCalculateDays_between(startDate, endDate) {
    let start = new Date(startDate);
    let end = new Date(endDate);
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.floor(daysDifference);
}
function myCalculateDays_fromNow(startDate){
    let start = new Date(startDate);
    let end = new Date();
    let timeDifference = end - start;
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    return Math.floor(daysDifference);
}
//////////////////////////////////
//  :b: scrapity_carosol :b:
//I'd like to make an option to page-jump
async function scrapity_carosol( getURL, getScrapity_data){
	
	var tmp_carosole_urls = Object.keys(getScrapity_data);

	if( tmp_carosole_urls.indexOf( getURL) != -1){ 
		 await getScrapity_data[ getURL ](); 
	}else{	// below jumps to first page if on a page not in it. 
	   return window.location.href = Object.keys(getScrapity_data)[0];
	}

	  // drop to file, AND goto next file
	  var getExit_prompt =prompt(
		"'s'- save/load data via pastebox\n"+
		"'sn'- save/load data via pastebox AND goto NEXT\n" + 
		"'p' - gives list of pages to jump too \n"+
		"Enter(blank) for 'NEXT PAGE',cancel 'stay here'\n"+
		"localStore.clear() tp RESET (in console)\n"+
		"(cancel to stay on page)" );
	
	if(getExit_prompt != null){ 
	  // jumping to a different file if "p"
	  if(getExit_prompt.trim()[0] == "p"){
		var tmpkeys=Object.keys(carosole_urls_n_scripts_to_run);
		var getURL = prompt_get_obj_keys( "", tmpkeys, true );
		if( -1 != tmpkeys.indexOf(getURL.trim())   ){ 
			window.location.href = getURL; }
		return; }
	  // save/load-box if first box is "s"
	  if(getExit_prompt.trim()[0] == "s"){
		//test if valid JSON prior to loading...
		//TODO here
		var tmp_new_JSON = 
		  prompt("Here is saved data for this domain (mainURL):\n"
			+"(single line, limit of prompt(),\n"
			+"can use online prettifier)\n"
		     +"(--can paste new data):",
			myGlobalVars_pullSavedAsString().trim());
		
		//no data... or change
		if(tmp_new_JSON.trim() == "" || tmp_new_JSON== null ||
		   tmp_new_JSON ==myGlobalVars_pullSavedAsString().trim()){
		}else{ 
		  if( !ROWS_IS_STRING_A_JSON( tmp_new_JSON)){
		    prompt("Data processed is not detected as valid JSON");
		    return; 
		  }else{ //is valid json
		    myGlobalVars_restore( tmp_new_JSON );
		    myGlobalVars_save( );
		    prompt("Loaded succcessfully,\n"+
				"check web-console for pretiffied JSON");
		    console.log( await pipe_(tmp_new_JSON,
				[[JSON.parse, PIPE_OUT],
				 [JSON.stringify, PIPE_OUT, null, 2]]));
		  }
		}
	  } }
	  // going to next if "sn" or "" ... 
	  if(getExit_prompt == null){ return;}
	  if(getExit_prompt.trim() == ""||getExit_prompt.trim()=="sn"){
		var tmp_carosole_loc = 1+tmp_carosole_urls.indexOf(getURL);
		if(tmp_carosole_loc == tmp_carosole_urls.length){ 
			tmp_carosole_loc =0;}
		window.location.href = tmp_carosole_urls[tmp_carosole_loc];
	  }  }

//carosol launch is after this......
//////////////////////////////////////////////
////////// :b:pipe_rows.js :b:  (OK after code, no calls out of functs)///
//////////////////////////////////////////////
//////////////////////////////////////////////
var PIPE_OUT="PO-adfAFasdfjasld23289234"; var PIPE_GLOBAL_THIS= this; 
if(PIPE_GLOBAL_THIS['file_input']==null){ var file_input=prompt; }
// WARNING- ---===DATA IN, -ONE- DATA OUT--====---
// 	--THINK- ArrayAsPipe.split(injectdata).join(...)-> ONE data out
// 		(focus on DATA TRANSFORMATIONS INSIDE PIPE ITSELF)
// 	--GOOD- ADDING DATA MID PIPE DIRECTLY INJECTED VIA SCRIPT/DATA!!!
// 		(think 'awk' script running on data)(No altering extn data)
//	--GOOD- PING USER/ REAL WORLD IF STAYS IN PIPE MID-PIPE:
//		(think pinging a web server, OK if only getting data)
// 	---BAD-  ANYTHING ALTERED OUTSIDE OF PIPE (again, function/w pipes)
// 		-- ONE OUTPUT-ONLY ( do OUTSIDE of pipe) 
// 	--USE SPARINGLY- logs, errors/state ONLY(like stderr)
// 	--USE SPARINGLY- funct-names as strs 
async function pipe_(getPIPE_IN,getP2d){
     var tmpOUT=getPIPE_IN;var tmpVARS={}; 
     for(var i2=0; i2<getP2d.length; i2+=1){var i_p = getP2d[i2].concat(); 
		if(i_p[0] == PIPE_OUT){ i_p.shift();i_p[0]=tmpOUT[i_p[0]];} 
		for(var i=0; i< i_p.length; i+=1){ //preprocessing...
		   if(i_p[i] == PIPE_OUT){ i_p[i] = tmpOUT; continue;}}
		var tmpF = i_p.shift(); //tmpF= tmpFUNCT, i_p was concat
		if(typeof tmpF != "function"){
		 if(typeof PIPE_GLOBAL_THIS[tmpF]=="function"){ 
			tmpF = PIPE_GLOBAL_THIS[tmpF];
		 }else{ file_input( //ERROR
		  "pipe_-not found global funct for str named:"+tmpF); }}
		tmpOUT = await tmpF.apply( tmpOUT, i_p); }
	return tmpOUT; }
// ONE AT A TIME (to preserve sanity for data)
function ROWS_ADD_COL( getR, getN, getL){//rowList,COLname, list
  for(var i=getR.length; i< getL.length; i+=1){getR[i] = {};}//fillin in...
  for(var i=0; i< getL.length; i+=1){ getR[i][getN]=getL[i];} return getR;}
function ROWS_ADD_MULTI_FROM_OBJ_OF_LISTS(getR, getO){//rowsAddToo, obj2use
  // getO={ header:[..list...], header2:[...list...]...}
  var k = Object.keys(getO); for(var i=0; i< k.length; i+=1){
	ROWS_ADD_COL(getR, k[i], getO[k[i]]); } return getR; }
function ROWS_DEL_COL( getR, getN ){// getRowList, getCOLName
  for(var i=0; i< getR.length; i+=1){delete getR[i][ getN ];} return getR;}
function ROWS_GET_COL(getR, getN){var tmpO =[];// getRowList, getCOLName 
  for(var i=0;i< getR.length; i+=1){tmpO.push(getR[i][getN]);}return tmpO;}
function ROWS_KEEP_COLS(getR, getNS){ // getRowList, getCOLNames_LIST
  var tmpOut={}; for(var i_n=0;i_n<getNS.length;i_n+=1){var tmpN=getNS[i_n];
    var tmpList= []; for(var i=0; i< getR.length; i+=1){	
     tmpList.push(getR[i][ getN ]);} tmpOut[ tmpN]=tmpList;}return tmpOut;}
// makes keys of all unique col-values, puts matchhing rows in kyes
// 	(STR/NUMBER VOL_VALS) -- look up 'groupby' commands in general
function ROWS_GROUPBY( getR, getN ){var tmpOut= {}; //getRows, getColName
   for(var i=0; i< getR.length; i+=1){var i_v=getR[i][getN];
	if( tmpOut[i_v] == undefined){tmpOut[i_v]= [];}
	tmpOut[i_v].push(getR[i]); } return tmpOut; }
function ROWS_TOCSV( getR, getDC, getDR){ //getRows, rowDelinator, colDelin
	var tmpCols = Object.keys(getR[0]);var tmpOut =[];//to string
	for(var i_r=0; i_r< getR.length; i_r+=1){
		for(var i_c=0; i_c< tmpCols.length; i_c+=1){
			tmpOut.push( getR[i_r][tmpCols[i_c]]);
			tmpOut.push(getDC);  }
		tmpOut.pop( ); tmpOut.push( getDR); }
	tmpOut.pop( ); // above will put extra delin
	return tmpCols.join( getDC) + getDR + tmpOut.join("" );}
function ROWS_FROMCSV(getCSV, getDC, getDR){//getCSV,rowDelinator, colDelin
  var tmpCols = getCSV.split(getDR);
  var tmpHead = tmpCols.shift().split(getDC); 
  for(var i=0; i<tmpCols.length;i+=1){
		var tmpRow = {}; tmpCols[i] = tmpCols[i].split(getDC);
		for(var i_h = 0; i_h< tmpHead.length; i_h +=1){
		   tmpRow[tmpHead[i_h]] = tmpCols[i][i_h]; 
		   if(!isNaN(tmpRow[tmpHead[i_h]])){ tmpRow[tmpHead[i_h]] = 
			parseFloat(tmpRow[tmpHead[i_h]]);}} 
		tmpCols[i] = tmpRow; }
  return tmpCols; }
function ROWS_FIND( getRows, getCallback){ // returns 1 item or null
	//callback=function(item){return true(null/false for not match)}
	for(var i=0; i< getRows.length; i+=1){ 
		if(getCallback(getRows[i])==1){return getRows[i];}} }
function ROWS_NORMALIZE(getRows, getFillBlanksWith){ //based on 1st row
  var tmpH = Object.keys(getRows); //head
  for(var i=0; i< getRows.length; i+=1){ for(var j=0; j<tmpH.lenth; j+=1){ 
	if(getRows[i][tmpH[j]]==undefined){ 
	    getRows[i][tmpH[j]] = getFillBlanksWith;}}} return getRows;}
/////////////////////////////////////////////
//BELOW WORK LIKE BUILTIN ARRAY filter/map/sort/etc. 
//		EXCEPT HAVE: 
//	-- 'CONFIG' added as optional inputs to END of callback,
//		 so can inject stuff to callback!
//	-- index/obj-key AFTER optional config (n callback)for ALL but sort
//	-- EDIT, OBJS work as input for all but SORT- runs on VALUES
//		(think a bunch of named configs to run cmd via MAP on)  
//	(USE BUILT-INS LESS NEED THE INJECTION!)
function ROWS_FOREACH(getRows, getCallback, getConfig_OPTIONAL){
	//SEE ABOVE DOC
        if(! Array.isArray(getRows)){  var k=Object.keys(getRows);
	  for(var i=0; i<k.length; i+=1){ 
		getCallback(getRows[k[i]], getConfig_OPTIONAL, k[i]);} }
	for(var i=0; i< getRows.length; i+=1){ 
		getCallback( getRows[i], getConfig_OPTIONAL, i);}}
function ROWS_MAP(getRows, getCallback, getConfig_OPTIONAL){//SEE ABOVE DOC 
  if(! Array.isArray(getRows)){ var tmpOut={}; var k=Object.keys(getRows);
	for(var i=0; i<k.length; i+=1){ tmpOut[k[i]]=
		getCallback(getRows[k[i]], getConfig_OPTIONAL, k[i]);} 
	return tmpOut; }
  var tmpO = []; for(var i=0;i< getRows.length; i+=1){
      tmpO[i]=getCallback( getRows[i], getConfig_OPTIONAL, i);}return tmpO;}
function ROWS_REDUCE(getRows, getCallback, 
	getAccumlator, getConfig_OPTIONAL ){ //SEE ABOVE DOC 
    if(! Array.isArray(getRows)){  var k=Object.keys(getRows);
	  for(var i=0; i<k.length; i+=1){ getAccumlator = getCallback(
		getAccumlator, getRows[k[i]], getConfig_OPTIONAL, k[i]);}
	  return getAccumlator; }
    for(var i=0;i< getRows.length; i+=1){ 	getAccumlator =
	 getCallback( getAccumlator, getRows[i], getConfig_OPTIONAL, i );}  
    return getAccumlator; }
function ROWS_FILTER(getRows, getCallback, getConfig_OPTIONAL){
	//SEE ABOVE DOC
   if(! Array.isArray(getRows)){ var k = Object.keys(getRows);
	var tmpO={};for(var i=0;i< k.length; i+=1){ 
	 if(getCallback( getRows[k[i]],getConfig_OPTIONAL, k[i])){
		tmpO[k[i]] = getRows[k[i]]; }} return tmpO; } 
   var tmpO=[]; for(var i=0;i< getRows.length; i+=1){
	if(getCallback( getRows[i], getConfig_OPTIONAL, i)){
      	tmpO.push(getRows[i]); }}  return tmpO;}

function ROWS_SORT(getRows, getCallback,getConfig_OPTIONAL){//SEE ABOVE DOC
    return getRows.concat().sort( function(a,b){ 
		return getCallback(a,b,getConfig_OPTIONAL);}); }
// cause data handling:
function ROWS_IS_STRING_A_JSON( getJSON ){ 
	try{ JSON.parse(getJSON); return 1;}catch(e){ return 0;}}

//////////////////////////////////////////////
//////////END pipe_rows//////////////////////////
//////////////////////////////////////////////
//////////////////////////////////////////////

// :b: launch scrapity_carosol:b:
// see carosole_urls_n_scripts_to_run-
// 	{url:script_to_run (actual function/function wrapper (no params))}
scrapity_carosol( window.location.href, carosole_urls_n_scripts_to_run);

//////// IF COPY PASTING: " '' " in VIM jumps to PREV POSITION
