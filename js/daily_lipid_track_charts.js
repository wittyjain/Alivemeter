var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
function GetChart_LDL(datsJson,HighChartRenderID)
{
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
   var CatValue6 = [];

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
   datsJson6 = datsJson[5].split('/');
   //datsJson7 = datsJson[6].split('/');
  // datsJson8 = datsJson[7].split('/');
	
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

	/*for (var m in datsJson7) {
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
	}*/


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
			
             series:[{
                name: 'Personal Record',
                data: CatValue,
				type: 'column',
				yAxis: 0,
				showInLegend: false,
				color:'#9aca04',
            },
			 

			{
                name: 'Optimal 100 and Less',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'Maroon',
            },

			{
                name: 'Borderline Low',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Borderline High',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            } ,

			{
                name: 'High 190 and above',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			/*{
                name: '',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'blue',
            },

			{
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

function GetChart_HDL(datsJson,HighChartRenderID)
{
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
   var CatValue6 = [];

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
   datsJson6 = datsJson[5].split('/');
   //datsJson7 = datsJson[6].split('/');
  // datsJson8 = datsJson[7].split('/');
	
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

	/*for (var m in datsJson7) {
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
	}*/


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
			
             series:[{
               name: 'Personal Record',
                data: CatValue,
				type: 'column',
				yAxis: 0,
				showInLegend: false,
				color:'#9aca04',
            },
			 

			{
                name: 'Low Level, Increased Risk',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'Maroon',
            },

			{
                name: 'Average Level,Average Risk, Minimum range ',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Average Level,Average Risk, Maximum range ',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            } ,

			{
                name: 'High Level, less than average risk',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			/*{
                name: '',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'blue',
            },

			{
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

	 
function GetChart_CT(datsJson,HighChartRenderID)
{
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
   var CatValue6 = [];

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
   datsJson6 = datsJson[5].split('/');
   //datsJson7 = datsJson[6].split('/');
  // datsJson8 = datsJson[7].split('/');
	
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

	/*for (var m in datsJson7) {
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
	}*/


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
			
             series:[{
               name: 'Personal Record',
                data: CatValue,
				type: 'column',
				yAxis: 0,
				showInLegend: false,
				color:'#9aca04',
            },
			 

			{
                name: 'Desirable 200 and less',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'Maroon',
            },

			{
                name: 'Borderline Minimum Value',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Borderline Maximum Value',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            } ,

			{
                name: 'High',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			/*{
                name: '',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'blue',
            },

			{
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


function GetChart_CT1(datsJson,HighChartRenderID)
{
   var Cat = [];
   var CatValue = [];
   var CatValue1 = [];
   var CatValue2 = [];
   var CatValue3 = [];
   var CatValue4 = [];
   var CatValue5 = [];
   var CatValue6 = [];

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
   datsJson6 = datsJson[5].split('/');
   //datsJson7 = datsJson[6].split('/');
  // datsJson8 = datsJson[7].split('/');
	
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

	/*for (var m in datsJson7) {
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
	}*/


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
			
             series:[{
               name: 'Personal Record',
                data: CatValue,
				type: 'column',
				yAxis: 0,
				showInLegend: false,
				color:'#9aca04',
            },
			 

			{
                name: 'Desirable 150 and Less',
                data: CatValue1,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'Maroon',
            },

			{
                name: 'Borderline Minimum Value',
                data: CatValue2,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            },

			{
                name: 'Borderline Maximum Value',
                data: CatValue3,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'blue',
            } ,

			{
                name: 'High',
                data: CatValue4,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: false,
				color:'red',
            },

			/*{
                name: '',
                data: CatValue5,
				type: 'spline',
				dashStyle: 'shortdot',
				showInLegend: true,
				color:'blue',
            },

			{
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

	if (menu=="triglyceride_blood_sugar_result")
	{
		 
		fromdate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultFromDate").value);
		todate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultToDate").value);;
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
	
		document.getElementById("txttriglyceride_blood_sugar_resultFromDate").value=fromdate;
		document.getElementById("txttriglyceride_blood_sugar_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvtriglyceride_blood_sugar_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		
		 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="triglyceride_blood_sugar_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultToDateMonth").value);;
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
	
		document.getElementById("txttriglyceride_blood_sugar_resultFromDateMonth").value=fromdate;
		document.getElementById("txttriglyceride_blood_sugar_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvtriglyceride_blood_sugar_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;

		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="triglyceride_blood_sugar_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txttriglyceride_blood_sugar_resultToDateYearly").value);;
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
	
		document.getElementById("txttriglyceride_blood_sugar_resultFromDateYearly").value=fromdate;
		document.getElementById("txttriglyceride_blood_sugar_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvtriglyceride_blood_sugar_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 


		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}






	if (menu=="hdl_result")
	{
		 
		fromdate=new Date(document.getElementById("txthdl_resultFromDate").value);
		todate=new Date(document.getElementById("txthdl_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDayshdl_result").value;
		 

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
		document.getElementById("txthdl_resultFromDate").value=fromdate;
		document.getElementById("txthdl_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvhdl_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="hdl_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txthdl_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txthdl_resultToDateMonth").value);;
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
		document.getElementById("txthdl_resultFromDateMonth").value=fromdate;
		document.getElementById("txthdl_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvhdl_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="hdl_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txthdl_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txthdl_resultToDateYearly").value);;
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
	
		document.getElementById("txthdl_resultFromDateYearly").value=fromdate;
		document.getElementById("txthdl_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvhdl_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txthdl_resultFromDateYearly").value=fromdate;
		document.getElementById("txthdl_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvhdl_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="ldl_result")
	{
		 
		fromdate=new Date(document.getElementById("txtldl_resultFromDate").value);
		todate=new Date(document.getElementById("txtldl_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDaysldl_result").value;
		 

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
	
		document.getElementById("txtldl_resultFromDate").value=fromdate;
		document.getElementById("txtldl_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvldl_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="ldl_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtldl_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtldl_resultToDateMonth").value);;
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
	
		document.getElementById("txtldl_resultFromDateMonth").value=fromdate;
		document.getElementById("txtldl_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvldl_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="ldl_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtldl_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtldl_resultToDateYearly").value);;
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
	
		document.getElementById("txtldl_resultFromDateYearly").value=fromdate;
		document.getElementById("txtldl_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvldl_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txtldl_resultFromDateYearly").value=fromdate;
		document.getElementById("txtldl_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvldl_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="cholesterol_result")
	{
		 
		fromdate=new Date(document.getElementById("txtcholesterol_resultFromDate").value);
		todate=new Date(document.getElementById("txtcholesterol_resultToDate").value);;
		daysCal=document.getElementById("txtWeekDayscholesterol_result").value;
		 

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
	
		document.getElementById("txtcholesterol_resultFromDate").value=fromdate;
		document.getElementById("txtcholesterol_resultToDate").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcholesterol_resultMonthYearCaption").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}


	if (menu=="cholesterol_resultMonth")
	{
		 
		fromdate=new Date(document.getElementById("txtcholesterol_resultFromDateMonth").value);
		todate=new Date(document.getElementById("txtcholesterol_resultToDateMonth").value);;
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

		document.getElementById("txtcholesterol_resultFromDateMonth").value=fromdate;
		document.getElementById("txtcholesterol_resultToDateMonth").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcholesterol_resultMonthYearCaptionMonth").innerHTML=fromdate1+" - "+ todate_cap;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24);
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
	}

	if (menu=="cholesterol_resultYearly")
	{
		 
		fromdate=new Date(document.getElementById("txtcholesterol_resultFromDateYearly").value);
		todate=new Date(document.getElementById("txtcholesterol_resultToDateYearly").value);;
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
	
		document.getElementById("txtcholesterol_resultFromDateYearly").value=fromdate;
		document.getElementById("txtcholesterol_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcholesterol_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

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
	
		document.getElementById("txtcholesterol_resultFromDateYearly").value=fromdate;
		document.getElementById("txtcholesterol_resultToDateYearly").value=todate;		
		
		 
		fromdate1=fromdate.getDate()+" "+monthNames[fromdate.getMonth()]+" "+fromdate.getFullYear();
		todate1=todate.getDate()+" "+monthNames[todate.getMonth()]+" "+todate.getFullYear();

		document.getElementById("dvcholesterol_resultMonthYearCaptionYearly").innerHTML=fromdate1+" - "+ todate1;

		fromdate1=fromdate.getFullYear()+"/"+(fromdate.getMonth()+1)+"/"+fromdate.getDate();;
		todate1=todate.getFullYear()+"/"+(todate.getMonth()+1)+"/"+todate.getDate();;
		
		daysCal= (todate - fromdate) / (1000 * 60 * 60 * 24); 
		pageURL=hostname+"/includes/lipid_chart.inc.php?fromdate="+fromdate1+"&todate="+todate1+"&type="+menu+"&rowCount="+daysCal;
		
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
				if (menu=="triglyceride_blood_sugar_result")
				{
				   document.getElementById("triglyceride_blood_sugar_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="triglyceride_blood_sugar_resultMonth")
				{
				   document.getElementById("triglyceride_blood_sugar_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="triglyceride_blood_sugar_resultYearly")
				{
				   document.getElementById("triglyceride_blood_sugar_result_ChartYearly").innerHTML="";
				   return false;
				}


				if (menu=="hdl_result")
				{
				   document.getElementById("hdl_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="hdl_resultMonth")
				{
				   document.getElementById("hdl_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="hdl_resultYearly")
				{
				   document.getElementById("hdl_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="ldl_result")
				{
				   document.getElementById("ldl_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="ldl_resultMonth")
				{
				   document.getElementById("ldl_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="ldl_resultYearly")
				{
				   document.getElementById("ldl_result_ChartYearly").innerHTML="";
				   return false;
				}

				if (menu=="cholesterol_result")
				{
				   document.getElementById("cholesterol_result_Chart").innerHTML="";
				   return false;
				}
				 
				if (menu=="cholesterol_resultMonth")
				{
				   document.getElementById("cholesterol_result_ChartMonth").innerHTML="";
				   return false;
				}

				if (menu=="cholesterol_resultYearly")
				{
				   document.getElementById("cholesterol_result_ChartYearly").innerHTML="";
				   return false;
				}

				
		   }
			if (menu=="triglyceride_blood_sugar_result")
			{
			   GetChart_CT1(xmlhttp.responseText,'#triglyceride_blood_sugar_result_Chart')
			   if (type=="")
				{
				   GetChartDetails('triglyceride_blood_sugar_resultMonth','')
				}
			   
			}
			if (menu=="triglyceride_blood_sugar_resultMonth")
			{
			   GetChart_CT1(xmlhttp.responseText,'#triglyceride_blood_sugar_result_ChartMonth')
			   GetChartDetails('triglyceride_blood_sugar_resultYearly','')
			}

			 if (menu=="triglyceride_blood_sugar_resultYearly")
			{
			   GetChart_CT1(xmlhttp.responseText,'#triglyceride_blood_sugar_result_ChartYearly')


				if (type=="")
				{
					GetChartDetails('hdl_result','')
				}
			}

			if (menu=="hdl_result")
			{
			   GetChart_HDL(xmlhttp.responseText,'#hdl_result_Chart')
			   GetChartDetails('hdl_resultMonth','')
			}
			if (menu=="hdl_resultMonth")
			{
			   GetChart_HDL(xmlhttp.responseText,'#hdl_result_ChartMonth')
			   GetChartDetails('hdl_resultYearly','')
			}

			 if (menu=="hdl_resultYearly")
			{
			   GetChart_HDL(xmlhttp.responseText,'#hdl_result_ChartYearly')
				if (type=="")
				{
					GetChartDetails('ldl_result','')
				}
			}
			
			if (menu=="ldl_result")
			{
			 
			   GetChart_LDL(xmlhttp.responseText,'#ldl_result_Chart')
			   GetChartDetails('ldl_resultMonth','')
			}
			if (menu=="ldl_resultMonth")
			{
			   GetChart_LDL(xmlhttp.responseText,'#ldl_result_ChartMonth')
			   GetChartDetails('ldl_resultYearly','')
			}

			 if (menu=="ldl_resultYearly")
			{
			   GetChart_LDL(xmlhttp.responseText,'#ldl_result_ChartYearly')
				 if (type=="")
				{
					 GetChartDetails('cholesterol_result','')
				}
			  
			   //RetriveReocrds_DailyTracking('Sugar_Profile','dvSugar_Profile');

			} 


			if (menu=="cholesterol_result")
			{
			   GetChart_CT(xmlhttp.responseText,'#cholesterol_result_Chart')
			   GetChartDetails('cholesterol_resultMonth','')
			}
			if (menu=="cholesterol_resultMonth")
			{
			   GetChart_CT(xmlhttp.responseText,'#cholesterol_result_ChartMonth')
			   GetChartDetails('cholesterol_resultYearly','')
			}

			 if (menu=="cholesterol_resultYearly")
			{
			   GetChart_CT(xmlhttp.responseText,'#cholesterol_result_ChartYearly')
			   RetriveReocrds_DailyTracking('Lipid_Profile','dvLipid_Profile');

			} 
		}
	}
	
	xmlhttp.open("GET",pageURL,true);
	xmlhttp.send();
}