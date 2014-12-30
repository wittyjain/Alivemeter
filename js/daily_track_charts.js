var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

function GetChart(datsJson,HighChartRenderID)

{

   var Cat = [];

   var CatValue = [];

   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
//alert(datsJson);

//alert(HighChartRenderID);

//console.log(datsJson);

   if (datsJson.trim()=="")

   {

	   return false;

   }

   datsJson = datsJson.split('###');

  // console.log(datsJson);

  // alert(datsJson);

   

   datsJson1 = datsJson[0].split('/');

   datsJson2 = datsJson[1].split('/');

   datsJson3 = datsJson[2].split('/');
   datsJson4 = datsJson[3].split('/');
   datsJson5 = datsJson[4].split('/');
	
	

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

                    text: 'Result (mmhg)'

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
				showInLegend: false,

				color:'#9aca04',

            },

			{
                name: 'Minimum Range',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			{
                name: 'Average Range',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Maximum Range',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'maroon',
            }

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

	

	if (menu=="diastolic")

	{

		 

		fromdate=new Date(document.getElementById("txtDiastolicFromDate").value);

		todate=new Date(document.getElementById("txtDiastolicToDate").value);;

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

	
		document.getElementById("txtDiastolicFromDate").value=fromdate;

		document.getElementById("txtDiastolicToDate").value=todate;		

		

		 

		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();

		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();



		document.getElementById("dvDiastolicMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;



		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;

		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		
		

		 

		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;

		

	}




	if (menu=="diastolicMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtDiastolicFromDateMonth").value);
		todate=new Date(document.getElementById("txtDiastolicToDateMonth").value);;
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
	
		document.getElementById("txtDiastolicFromDateMonth").value=fromdate;
		document.getElementById("txtDiastolicToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvDiastolicMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		 
		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="diastolicYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtDiastolicFromDateYearly").value);
		todate=new Date(document.getElementById("txtDiastolicToDateYearly").value);;
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
	
		document.getElementById("txtDiastolicFromDateYearly").value=fromdate;
		document.getElementById("txtDiastolicToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvDiastolicMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 


		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}






	if (menu=="systolic")
	{
		 
		fromdate=new Date(document.getElementById("txtSystolicFromDate").value);
		todate=new Date(document.getElementById("txtSystolicToDate").value);;
		daysCal=document.getElementById("txtWeekDaysSystolic").value;
		 

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
	
		document.getElementById("txtSystolicFromDate").value=fromdate;
		document.getElementById("txtSystolicToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvSystolicMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="systolicMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtSystolicFromDateMonth").value);
		todate=new Date(document.getElementById("txtSystolicToDateMonth").value);;
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

		document.getElementById("txtSystolicFromDateMonth").value=fromdate;
		document.getElementById("txtSystolicToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvSystolicMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="systolicYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtSystolicFromDateYearly").value);
		todate=new Date(document.getElementById("txtSystolicToDateYearly").value);;
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
	
		document.getElementById("txtSystolicFromDateYearly").value=fromdate;
		document.getElementById("txtSystolicToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvSystolicMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txtDiastolicFromDateYearly").value=fromdate;
		document.getElementById("txtSystolicToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvSystolicMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 

		pageURL=hostname+"/includes/diastolic_blood_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
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

				if (menu=="diastolic")
				{
				   document.getElementById("Diastolic_Chart").innerHTML="";

				   return false;

				}
				 
				if (menu=="diastolicMonth")
				{
				   document.getElementById("Diastolic_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="diastolicYearly")
				{
				   document.getElementById("Diastolic_ChartYearly").innerHTML="";
				   return false;
				}


				if (menu=="systolic")
				{
				   document.getElementById("Systolic_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="systolicMonth")
				{
				   document.getElementById("Systolic_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="systolicYearly")
				{
				   document.getElementById("Systolic_ChartYearly").innerHTML="";
				   return false;
				}
		   }

			if (menu=="diastolic")
			{
			   GetChart(xmlhttp.responseText,'#Diastolic_Chart')
			   if (type=="")
				{
				   GetChartDetails('diastolicMonth','')
				}
			   
			}
			if (menu=="diastolicMonth")
			{
			   GetChart(xmlhttp.responseText,'#Diastolic_ChartMonth')
			   GetChartDetails('diastolicYearly','')
			}

			 if (menu=="diastolicYearly")
			{
			   GetChart(xmlhttp.responseText,'#Diastolic_ChartYearly')


				if (type=="")
				{
					GetChartDetails('systolic','')
				}
			}

			if (menu=="systolic")
			{
			   GetChart(xmlhttp.responseText,'#Systolic_Chart')
			   GetChartDetails('systolicMonth','')
			}
			if (menu=="systolicMonth")
			{
			   GetChart(xmlhttp.responseText,'#Systolic_ChartMonth')
			   GetChartDetails('systolicYearly','')
			}

			 if (menu=="systolicYearly")
			{
			   GetChart(xmlhttp.responseText,'#Systolic_ChartYearly')
			   RetriveReocrds_DailyTracking('Blood_Pressure','dvBlood_Pressure');

			}
			
			//RetriveReocrds_DailyTracking('Blood_Pressure','dvBlood_Pressure');

		}

	}

	

	xmlhttp.open("GET",pageURL,true);

	xmlhttp.send();

}