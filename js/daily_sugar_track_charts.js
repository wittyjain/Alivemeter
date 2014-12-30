var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",

    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

function GetChart(datsJson,HighChartRenderID)

{

  
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
 //   var CatValue6 = [];

///alert(datsJson);

//alert(HighChartRenderID);

 ///console.log(datsJson);

   if (datsJson.trim()=="")

   {

	   return false;

   }

   datsJson = datsJson.split('###');

  /// console.log(datsJson);

  
   

   datsJson1 = datsJson[0].split('/');

   datsJson2 = datsJson[1].split('/');

   datsJson3 = datsJson[2].split('/');
   datsJson4 = datsJson[3].split('/');
   datsJson5 = datsJson[4].split('/');
   datsJson6 = datsJson[5].split('/');
   datsJson7 = datsJson[6].split('/');
   //datsJson8 = datsJson[7].split('/');

 /* alert(datsJson);

 alert(datsJson1);

 alert(datsJson2);

 alert(datsJson3);

  alert(datsJson4);*/

	

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



	for (var m in datsJson4) {
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

	/*for (var m in datsJson8) {
		if (!isNaN(parseFloat(datsJson8[m])))
		{
			CatValue6.push(parseFloat(datsJson8[m]));
		}
	}
*/

	//alert(Cat);

	//alert(CatValue);



	/// alert (CatValue1);



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

                    text: 'Result (mg/dl)'

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
                name: 'Normal Person (minimum value - '+CatValue1[0]+')',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'dot',
				showInLegend: false,
				color:'#330798',
            },

			{
                name: 'Normal Person (maximum value - '+CatValue2[0]+')',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'dot',
				showInLegend: false,
				color:'#330798',
            },

			{
                name: 'Early Diabetes (minimum value - '+CatValue3[0]+')',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'line',
				showInLegend: false,
				color:'#f3467b',
            } ,

			{
                name: 'Early Diabetes (maximum value - '+CatValue4[0]+')',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'line',
				showInLegend: false,
				color:'#f3467b',
            },

			{
                name: 'Established Diabetes (minimum value - '+CatValue5[0]+' and above)',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'#0ff6c8',
            },

			/*{
                name: '',
                data: CatValue6,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'maroon',
            }*/
			]

        });

    });

	

}

	 
function GetChartPost(datsJson,HighChartRenderID)

{

  
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
  
   if (datsJson.trim()=="")
 {

	   return false;
 }

   datsJson = datsJson.split('###');

   datsJson1 = datsJson[0].split('/');

   datsJson2 = datsJson[1].split('/');

   datsJson3 = datsJson[2].split('/');
   datsJson4 = datsJson[3].split('/');
   datsJson5 = datsJson[4].split('/');
   datsJson6 = datsJson[5].split('/');
 
   
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



	for (var m in datsJson4) {
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

                    text: 'Result (mg/dl)'

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
                name: 'Normal Person (average value - '+CatValue1[0]+')',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'maroon',
            },

			{
                name: 'Early Diabetes (minimum value - '+CatValue2[0]+')',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Early Diabetes (maximum value - '+CatValue3[0]+')',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            } ,

			{
                name: 'Established Diabetes (average value - '+CatValue4[0]+')',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            } ,
			]

        });

    });

	

}



function GetUrineRandom(datsJson,HighChartRenderID)

{

  
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
  
   if (datsJson.trim()=="")
 {

	   return false;
 }

   datsJson = datsJson.split('###');

   datsJson1 = datsJson[0].split('/');

   datsJson2 = datsJson[1].split('/');

   datsJson3 = datsJson[2].split('/');
   datsJson4 = datsJson[3].split('/');
   datsJson5 = datsJson[4].split('/');
   datsJson6 = datsJson[5].split('/');
 
   
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



	for (var m in datsJson4) {
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

                    text: 'Result (mg/dl)'

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


	if (menu=="fasting_blood_sugar_result")

	{

		 

		fromdate=new Date(document.getElementById("txtfasting_blood_sugar_resultFromDate").value);

		todate=new Date(document.getElementById("txtfasting_blood_sugar_resultToDate").value);;

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
	
		document.getElementById("txtfasting_blood_sugar_resultFromDate").value=fromdate;

		document.getElementById("txtfasting_blood_sugar_resultToDate").value=todate;		

		

		 

		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();

		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();



		document.getElementById("dvfasting_blood_sugar_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;



		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;

		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		
		

		 

		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;

		

	}




	if (menu=="fasting_blood_sugar_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtfasting_blood_sugar_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtfasting_blood_sugar_resultToDateMonth").value);;
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
	


		document.getElementById("txtfasting_blood_sugar_resultFromDateMonth").value=fromdate;
		document.getElementById("txtfasting_blood_sugar_resultToDateMonth").value=todate;		
		
		

		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvfasting_blood_sugar_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="fasting_blood_sugar_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtfasting_blood_sugar_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtfasting_blood_sugar_resultToDateYearly").value);;
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
	
		document.getElementById("txtfasting_blood_sugar_resultFromDateYearly").value=fromdate;
		document.getElementById("txtfasting_blood_sugar_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvfasting_blood_sugar_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 


		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}






	if (menu=="post_parandial_result")
	{
		 
		fromdate=new Date(document.getElementById("txtpost_parandial_resultFromDate").value);
		todate=new Date(document.getElementById("txtpost_parandial_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDayspost_parandial_result").value;
		 

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
	
		document.getElementById("txtpost_parandial_resultFromDate").value=fromdate;
		document.getElementById("txtpost_parandial_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvpost_parandial_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="post_parandial_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtpost_parandial_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtpost_parandial_resultToDateMonth").value);;
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
	
	
		document.getElementById("txtpost_parandial_resultFromDateMonth").value=fromdate;
		document.getElementById("txtpost_parandial_resultToDateMonth").value=todate;		
		
		 


		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvpost_parandial_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="post_parandial_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtpost_parandial_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtpost_parandial_resultToDateYearly").value);;
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
	
		document.getElementById("txtpost_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txtpost_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvpost_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txtpost_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txtpost_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvpost_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="urine_parandial_result")
	{
		 
		fromdate=new Date(document.getElementById("txturine_parandial_resultFromDate").value);
		todate=new Date(document.getElementById("txturine_parandial_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDaysurine_parandial_result").value;
		 

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
	
		document.getElementById("txturine_parandial_resultFromDate").value=fromdate;
		document.getElementById("txturine_parandial_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvurine_parandial_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="urine_parandial_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txturine_parandial_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txturine_parandial_resultToDateMonth").value);;
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
	
		document.getElementById("txturine_parandial_resultFromDateMonth").value=fromdate;
		document.getElementById("txturine_parandial_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvurine_parandial_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="urine_parandial_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txturine_parandial_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txturine_parandial_resultToDateYearly").value);;
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
	
		document.getElementById("txturine_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txturine_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvurine_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txturine_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txturine_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvurine_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="random_parandial_result")
	{
		 
		fromdate=new Date(document.getElementById("txtrandom_parandial_resultFromDate").value);
		todate=new Date(document.getElementById("txtrandom_parandial_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDaysrandom_parandial_result").value;
		 

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


		
	
		document.getElementById("txtrandom_parandial_resultFromDate").value=fromdate;
		document.getElementById("txtrandom_parandial_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvrandom_parandial_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="random_parandial_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtrandom_parandial_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtrandom_parandial_resultToDateMonth").value);;
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
	
		document.getElementById("txtrandom_parandial_resultFromDateMonth").value=fromdate;
		document.getElementById("txtrandom_parandial_resultToDateMonth").value=todate;		
		

		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvrandom_parandial_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="random_parandial_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtrandom_parandial_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtrandom_parandial_resultToDateYearly").value);;
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
	
		document.getElementById("txtrandom_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txtrandom_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvrandom_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txtrandom_parandial_resultFromDateYearly").value=fromdate;
		document.getElementById("txtrandom_parandial_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvrandom_parandial_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/fast_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
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

				if (menu=="fasting_blood_sugar_result")
				{
				   document.getElementById("fasting_blood_sugar_result_Chart").innerHTML="";

				   return false;

				}
				 
				if (menu=="fasting_blood_sugar_resultMonth")
				{
				   document.getElementById("fasting_blood_sugar_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="fasting_blood_sugar_resultYearly")
				{
				   document.getElementById("fasting_blood_sugar_result_ChartYearly").innerHTML="";
				   return false;
				}


				if (menu=="post_parandial_result")
				{
				   document.getElementById("post_parandial_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="post_parandial_resultMonth")
				{
				   document.getElementById("post_parandial_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="post_parandial_resultYearly")
				{
				   document.getElementById("post_parandial_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="urine_parandial_result")
				{
				   document.getElementById("urine_parandial_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="urine_parandial_resultMonth")
				{
				   document.getElementById("urine_parandial_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="urine_parandial_resultYearly")
				{
				   document.getElementById("urine_parandial_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="random_parandial_result")
				{
				   document.getElementById("random_parandial_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="random_parandial_resultMonth")
				{
				   document.getElementById("random_parandial_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="random_parandial_resultYearly")
				{
				   document.getElementById("random_parandial_result_ChartYearly").innerHTML="";
				   return false;
				}

				
		   }

			if (menu=="fasting_blood_sugar_result")
			{
			   GetChart(xmlhttp.responseText,'#fasting_blood_sugar_result_Chart')
			   if (type=="")
				{
				   GetChartDetails('fasting_blood_sugar_resultMonth','')
				}
			   
			}
			if (menu=="fasting_blood_sugar_resultMonth")
			{
			   GetChart(xmlhttp.responseText,'#fasting_blood_sugar_result_ChartMonth')
			   GetChartDetails('fasting_blood_sugar_resultYearly','')
			}

			 if (menu=="fasting_blood_sugar_resultYearly")
			{
			   GetChart(xmlhttp.responseText,'#fasting_blood_sugar_result_ChartYearly')


				if (type=="")
				{
					GetChartDetails('post_parandial_result','')
				}
			}

			if (menu=="post_parandial_result")
			{
			   GetChartPost(xmlhttp.responseText,'#post_parandial_result_Chart')
			   GetChartDetails('post_parandial_resultMonth','')
			}
			if (menu=="post_parandial_resultMonth")
			{
			   GetChartPost(xmlhttp.responseText,'#post_parandial_result_ChartMonth')
			   GetChartDetails('post_parandial_resultYearly','')
			}

			 if (menu=="post_parandial_resultYearly")
			{
			   GetChartPost(xmlhttp.responseText,'#post_parandial_result_ChartYearly')
				if (type=="")
				{
					GetChartDetails('urine_parandial_result','')
				}
			}
			
			if (menu=="urine_parandial_result")
			{
			 
			   GetUrineRandom(xmlhttp.responseText,'#urine_parandial_result_Chart')
			   GetChartDetails('urine_parandial_resultMonth','')
			}
			if (menu=="urine_parandial_resultMonth")
			{
			   GetUrineRandom(xmlhttp.responseText,'#urine_parandial_result_ChartMonth')
			   GetChartDetails('urine_parandial_resultYearly','')
			}

			 if (menu=="urine_parandial_resultYearly")
			{
			   GetUrineRandom(xmlhttp.responseText,'#urine_parandial_result_ChartYearly')
				 if (type=="")
				{
					 GetChartDetails('random_parandial_result','')
				}
			  
			   //RetriveReocrds_DailyTracking('Sugar_Profile','dvSugar_Profile');

			} 


			if (menu=="random_parandial_result")
			{
			   GetUrineRandom(xmlhttp.responseText,'#random_parandial_result_Chart')
			   GetChartDetails('random_parandial_resultMonth','')
			}
			if (menu=="random_parandial_resultMonth")
			{
			   GetUrineRandom(xmlhttp.responseText,'#random_parandial_result_ChartMonth')
			   GetChartDetails('random_parandial_resultYearly','')
			}

			 if (menu=="random_parandial_resultYearly")
			{
			   GetUrineRandom(xmlhttp.responseText,'#random_parandial_result_ChartYearly')
			   RetriveReocrds_DailyTracking('Sugar_Profile','dvSugar_Profile');

			} 
		}

	}

	

	xmlhttp.open("GET",pageURL,true);

	xmlhttp.send();

}