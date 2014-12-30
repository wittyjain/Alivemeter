var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",

    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

function GetChart(datsJson,HighChartRenderID)

{

//	alert(HighChartRenderID);

   var Cat = [];

	var strya="";
	
	
   var CatValue = [];

   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
   var CatValue6 = [];

		if(HighChartRenderID=="#spirit_result_Chart" ||  HighChartRenderID=="#spirit_result_ChartMonth" || HighChartRenderID=="#spirit_result_ChartYearly")
		{
			var strya="Consumption (ml)";
		}
		
		if(HighChartRenderID=="#beer_result_Chart" ||  HighChartRenderID=="#beer_result_ChartMonth" || HighChartRenderID=="#beer_result_ChartYearly")
		{
			var strya="Consumption (glasses)";
		}
		
		
		if(HighChartRenderID=="#cigarette_result_Chart" ||  HighChartRenderID=="#cigarette_result_ChartMonth" || HighChartRenderID=="#cigarette_result_ChartYearly")
		{
			var strya="Consumption per day";
		}
		
		if(HighChartRenderID=="#sleep_result_Chart" ||  HighChartRenderID=="#sleep_result_ChartMonth" || HighChartRenderID=="#sleep_result_ChartYearly")
		{
			var strya="Hours";
		}
 

//alert(HighChartRenderID);

//console.log(datsJson);

   if (datsJson.trim()=="")

   {

	   return false;

   }

   datsJson = datsJson.split('###');

  // console.log(datsJson);

  //alert(datsJson);

   

   datsJson1 = datsJson[0].split('/');
   datsJson2 = datsJson[1].split('/');
   datsJson3 = datsJson[2].split('/');
 /*  datsJson4 = datsJson[3].split('/');
   datsJson5 = datsJson[4].split('/');
   datsJson6 = datsJson[5].split('/');
   datsJson7 = datsJson[6].split('/');
   datsJson8 = datsJson[7].split('/');*/
	

	for (var i in datsJson1) {

		if (i !="contains")
		{
			Cat.push(datsJson1[i].trim());
		}
		else
		{
				Cat.push(datsJson1[i]);
		}

	}


 


	for (var m in datsJson2) {

		if (!isNaN(parseFloat(datsJson2[m])))

		{

			CatValue.push(parseFloat(datsJson2[m]));
			

		}

	}


	for (var m in datsJson3) {
		if (!isNaN(parseFloat(datsJson3[m])))
		{
			CatValue1.push(parseFloat(datsJson3[m]));
		}
	}



	/*for (var m in datsJson4) {
		if (!isNaN(parseFloat(datsJson4[m])))
		{
			CatValue2.push(parseFloat(datsJson4[m]));
		}
	}



	for (var m in datsJson5) {
		if (!isNaN(parseFloat(datsJson5[m])))
		{
			CatValue3.push(parseFloat(datsJson5[m]));
		}
	}

	for (var m in datsJson6) {
		if (!isNaN(parseFloat(datsJson6[m])))
		{
			CatValue4.push(parseFloat(datsJson6[m]));
		}
	}

	for (var m in datsJson7) {
		if (!isNaN(parseFloat(datsJson7[m])))
		{
			CatValue5.push(parseFloat(datsJson7[m]));
		}
	}

	for (var m in datsJson8) {
		if (!isNaN(parseFloat(datsJson8[m])))
		{
			CatValue6.push(parseFloat(datsJson8[m]));
		}
	}
*/

	//alert(Cat);

	//alert(CatValue);



	 



	$(function () {

        $(HighChartRenderID).highcharts({

			chart: { height:'315',width:'736', zoomType: 'xy'},

			title:'',

			

            xAxis: {

				text: 'Date',

                categories: Cat,

				gridLineWidth: 1,

	            gridLineColor: (Highcharts.theme && Highcharts.theme.background2) || '#ebebeb',

            },

            yAxis: {

			    title: {

                    text: strya

                },

            },

			 plotOptions: {

                line: {

                    dataLabels: {

                        enabled: true

                    },

                    enableMouseTracking: false

                }

            },

			
             series: [{
                name: 'Personal Record',
                data: CatValue,
				type: 'column',
				yAxis: 0,
				showInLegend: false,
				color:'#9aca04',
            },
			 

			{
                name: 'Your Average Weekly Target',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'line',
				showInLegend: false,
				color:'red',
            },

			/*{
                name: '',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: '',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'maroon',
            } ,

			{
                name: '',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			{
                name: '',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: '',
                data: CatValue6,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'maroon',
            }*/
			]

        });

    });

	

}

	 



function addDays(theDate, days) {

    return new Date(theDate.getTime() + days*24*60*60*1000);

}

function GetChartDetails(menu,type)

{

	var pageURL="";

	var fromdate;

	var todate;



	var fromdate1;

	var todate1;

	
	var daysCal="0";


	if (menu=="spirit_result")

	{

		 

		fromdate=new Date(document.getElementById("txtspirit_resultFromDate").value);

		todate=new Date(document.getElementById("txtspirit_resultToDate").value);;

		daysCal=document.getElementById("txtWeekDays").value;
		 



		if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-7);
			 todate = addDays(fromdate, 6);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,7);
			 todate = addDays(fromdate, 6);
		}
		else
		{
			todate = new Date();
			fromdate=new Date(addDays(todate, -6));
			//todate = new Date();
		}

	
		document.getElementById("txtspirit_resultFromDate").value=fromdate;

		document.getElementById("txtspirit_resultToDate").value=todate;		

		

		 

		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();

		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();



		document.getElementById("dvspirit_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;



		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;

		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		
		

		 

		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;

		

	}




	if (menu=="spirit_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtspirit_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtspirit_resultToDateMonth").value);;
		daysCal=document.getElementById("txtWeekDaysMonth").value;
		 

		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth()-1, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
		}
	

		todate_cap=todate;
		todate_cap=addDays(todate_cap,-1);
		todate_cap=todate_cap.getDate()+" "+monthNames[todate_cap.getMonth()]+" "+todate_cap.getFullYear();

		document.getElementById("txtspirit_resultFromDateMonth").value=fromdate;
		document.getElementById("txtspirit_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvspirit_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="spirit_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtspirit_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtspirit_resultToDateYearly").value);;
		daysCal=document.getElementById("txtWeekDaysYearly").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			//fromdate = new Date(fromdate.getFullYear()-1, fromdate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()-1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			//fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()+1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(),0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
		}
	
		document.getElementById("txtspirit_resultFromDateYearly").value=fromdate;
		document.getElementById("txtspirit_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvspirit_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 


		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}






	if (menu=="beer_result")
	{
		 
		fromdate=new Date(document.getElementById("txtbeer_resultFromDate").value);
		todate=new Date(document.getElementById("txtbeer_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDaysbeer_result").value;
		 

		if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-7);
			 todate = addDays(fromdate, 6);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,7);
			 todate = addDays(fromdate, 6);
		}
		else
		{
			todate = new Date();
			fromdate=new Date(addDays(todate, -6));
			//todate = new Date();
		}
	
		document.getElementById("txtbeer_resultFromDate").value=fromdate;
		document.getElementById("txtbeer_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvbeer_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="beer_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtbeer_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtbeer_resultToDateMonth").value);;
		daysCal=document.getElementById("txtWeekDaysMonth").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-30);
			 todate = addDays(fromdate, 30);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,30);
			 todate = addDays(fromdate, 30);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 30));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth()-1, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
		}
	


		todate_cap=todate;
		todate_cap=addDays(todate_cap,-1);
		todate_cap=todate_cap.getDate()+" "+monthNames[todate_cap.getMonth()]+" "+todate_cap.getFullYear();

		document.getElementById("txtbeer_resultFromDateMonth").value=fromdate;
		document.getElementById("txtbeer_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvbeer_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="beer_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtbeer_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtbeer_resultToDateYearly").value);;
		daysCal=document.getElementById("txtWeekDaysYearly").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}
	
		document.getElementById("txtbeer_resultFromDateYearly").value=fromdate;
		document.getElementById("txtbeer_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvbeer_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;*/
		
		 /*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			//fromdate = new Date(fromdate.getFullYear()-1, fromdate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()-1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			//fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()+1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(),0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
		}
	
		document.getElementById("txtbeer_resultFromDateYearly").value=fromdate;
		document.getElementById("txtbeer_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvbeer_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="cigarette_result")
	{
		 
		fromdate=new Date(document.getElementById("txtcigarette_resultFromDate").value);
		todate=new Date(document.getElementById("txtcigarette_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDayscigarette_result").value;
		 

		if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-7);
			 todate = addDays(fromdate, 6);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,7);
			 todate = addDays(fromdate, 6);
		}
		else
		{
			todate = new Date();
			fromdate=new Date(addDays(todate, -6));
			//todate = new Date();
		}
	
		document.getElementById("txtcigarette_resultFromDate").value=fromdate;
		document.getElementById("txtcigarette_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcigarette_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="cigarette_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtcigarette_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtcigarette_resultToDateMonth").value);;
		daysCal=document.getElementById("txtWeekDaysMonth").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-30);
			 todate = addDays(fromdate, 30);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,30);
			 todate = addDays(fromdate, 30);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 30));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth()-1, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
		}
	

		todate_cap=todate;
		todate_cap=addDays(todate_cap,-1);
		todate_cap=todate_cap.getDate()+" "+monthNames[todate_cap.getMonth()]+" "+todate_cap.getFullYear();

		document.getElementById("txtcigarette_resultFromDateMonth").value=fromdate;
		document.getElementById("txtcigarette_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcigarette_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="cigarette_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtcigarette_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtcigarette_resultToDateYearly").value);;
		daysCal=document.getElementById("txtWeekDaysYearly").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}
	
		document.getElementById("txtcigarette_resultFromDateYearly").value=fromdate;
		document.getElementById("txtcigarette_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcigarette_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;*/
		
		 /*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			//fromdate = new Date(fromdate.getFullYear()-1, fromdate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()-1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			//fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()+1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(),0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
		}
	
		document.getElementById("txtcigarette_resultFromDateYearly").value=fromdate;
		document.getElementById("txtcigarette_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcigarette_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="sleep_result")
	{
		 
		fromdate=new Date(document.getElementById("txtsleep_resultFromDate").value);
		todate=new Date(document.getElementById("txtsleep_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDayssleep_result").value;
		 
		if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-7);
			 todate = addDays(fromdate, 6);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,7);
			 todate = addDays(fromdate, 6);
		}
		else
		{
			todate = new Date();
			fromdate=new Date(addDays(todate, -6));
			//todate = new Date();
		}
	
		document.getElementById("txtsleep_resultFromDate").value=fromdate;
		document.getElementById("txtsleep_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvsleep_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="sleep_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtsleep_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtsleep_resultToDateMonth").value);;
		daysCal=document.getElementById("txtWeekDaysMonth").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-30);
			 todate = addDays(fromdate, 30);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,30);
			 todate = addDays(fromdate, 30);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 30));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth()-1, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(), fromdate.getMonth(), 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+1, 1);
		}
	

		todate_cap=todate;
		todate_cap=addDays(todate_cap,-1);
		todate_cap=todate_cap.getDate()+" "+monthNames[todate_cap.getMonth()]+" "+todate_cap.getFullYear();

		document.getElementById("txtsleep_resultFromDateMonth").value=fromdate;
		document.getElementById("txtsleep_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvsleep_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="sleep_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtsleep_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtsleep_resultToDateYearly").value);;
		daysCal=document.getElementById("txtWeekDaysYearly").value;
		 

		/*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}
	
		document.getElementById("txtsleep_resultFromDateYearly").value=fromdate;
		document.getElementById("txtsleep_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvsleep_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;*/
		
		 /*if (type=="Prev")
		{
			 fromdate = addDays(fromdate,-365);
			 todate = addDays(fromdate, 365);
	
			
		}
		else if (type=="Next")
		{		
			 fromdate = addDays(fromdate,365);
			 todate = addDays(fromdate, 365);
		}
		else
		{
			fromdate=new Date();
			todate = new Date(addDays(fromdate, 365));
		}*/


		if (type=="Prev")
		{
			 //fromdate = addDays(fromdate,-30);
			 //todate = addDays(fromdate, 30);
			//fromdate = new Date(fromdate.getFullYear()-1, fromdate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()-1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else if (type=="Next")
		{		
			// fromdate = addDays(fromdate,30);
			// todate = addDays(fromdate, 30);

			//fromdate = new Date(todate.getFullYear(), todate.getMonth(), 1);
			//todate = new Date(fromdate.getFullYear()+1, fromdate.getMonth(), 1);

			fromdate = new Date(fromdate.getFullYear()+1,0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
			
		}
		else
		{
			//fromdate=new Date();
			//todate = new Date(addDays(fromdate, 30));

			fromdate = new Date(fromdate.getFullYear(),0, 1);
			todate = new Date(fromdate.getFullYear(), fromdate.getMonth()+12, 0);
		}
	
		document.getElementById("txtsleep_resultFromDateYearly").value=fromdate;
		document.getElementById("txtsleep_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvsleep_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/life_style_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (window.XMLHttpRequest)

	{// for IE7+, Firefox, Chrome, Opera, Safaricodes

		xmlhttp = new XMLHttpRequest();

	}

	else

	{// code for IE6, IE5

		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	}

	xmlhttp.onreadystatechange=function()

	{

		

		if (xmlhttp.readyState == 4 && xmlhttp.status == 200)

		{

			
			if (xmlhttp.responseText.trim()=="")

		   {

				if (menu=="spirit_result")
				{
				   document.getElementById("spirit_result_Chart").innerHTML="";

				   return false;

				}
				 
				if (menu=="spirit_resultMonth")
				{
				   document.getElementById("spirit_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="spirit_resultYearly")
				{
				   document.getElementById("spirit_result_ChartYearly").innerHTML="";
				   return false;
				}


				if (menu=="beer_result")
				{
				   document.getElementById("beer_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="beer_resultMonth")
				{
				   document.getElementById("beer_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="beer_resultYearly")
				{
				   document.getElementById("beer_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="cigarette_result")
				{
				   document.getElementById("cigarette_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="cigarette_resultMonth")
				{
				   document.getElementById("cigarette_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="cigarette_resultYearly")
				{
				   document.getElementById("cigarette_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="sleep_result")
				{
				   document.getElementById("sleep_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="sleep_resultMonth")
				{
				   document.getElementById("sleep_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="sleep_resultYearly")
				{
				   document.getElementById("sleep_result_ChartYearly").innerHTML="";
				   return false;
				}

				
		   }

			if (menu=="spirit_result")
			{
			   GetChart(xmlhttp.responseText,'#spirit_result_Chart')
			   if (type=="")
				{
				   GetChartDetails('spirit_resultMonth','')
				}
			   
			}
			if (menu=="spirit_resultMonth")
			{
			   GetChart(xmlhttp.responseText,'#spirit_result_ChartMonth')
			   GetChartDetails('spirit_resultYearly','')
			}

			 if (menu=="spirit_resultYearly")
			{
			   GetChart(xmlhttp.responseText,'#spirit_result_ChartYearly')


				if (type=="")
				{
					GetChartDetails('beer_result','')
				}
			}

			if (menu=="beer_result")
			{
			   GetChart(xmlhttp.responseText,'#beer_result_Chart')
			   GetChartDetails('beer_resultMonth','')
			}
			if (menu=="beer_resultMonth")
			{
			   GetChart(xmlhttp.responseText,'#beer_result_ChartMonth')
			   GetChartDetails('beer_resultYearly','')
			}

			 if (menu=="beer_resultYearly")
			{
			   GetChart(xmlhttp.responseText,'#beer_result_ChartYearly')
				if (type=="")
				{
					GetChartDetails('cigarette_result','')
				}
			}
			
			if (menu=="cigarette_result")
			{
			 
			   GetChart(xmlhttp.responseText,'#cigarette_result_Chart')
			   GetChartDetails('cigarette_resultMonth','')
			}
			if (menu=="cigarette_resultMonth")
			{
			   GetChart(xmlhttp.responseText,'#cigarette_result_ChartMonth')
			   GetChartDetails('cigarette_resultYearly','')
			}

			 if (menu=="cigarette_resultYearly")
			{
			   GetChart(xmlhttp.responseText,'#cigarette_result_ChartYearly')
				 
				GetChartDetails('sleep_result','')
			  
			   //RetriveReocrds_DailyTracking('Sugar_Profile','dvSugar_Profile');
			   //SetLifeStyleGoal('');

			} 


			if (menu=="sleep_result")
			{
			   GetChart(xmlhttp.responseText,'#sleep_result_Chart')
			   GetChartDetails('sleep_resultMonth','')
			}
			if (menu=="sleep_resultMonth")
			{
			   GetChart(xmlhttp.responseText,'#sleep_result_ChartMonth')
			   GetChartDetails('sleep_resultYearly','')
			}

			 if (menu=="sleep_resultYearly")
			{
			   GetChart(xmlhttp.responseText,'#sleep_result_ChartYearly')
			   SetLifeStyleGoal('');
			 //  RetriveReocrds_DailyTracking('Life_Style','dvLife_Style');

			} 
		}

	}

	

	xmlhttp.open("GET",pageURL,true);

	xmlhttp.send();

}