
//div.style.minWidth = '200px';/** Plugin TT for PirotecnitaTomas  2019*/
Draw.loadPlugin(function(ui) {
  
  ////Sidebar libs in
var url1 = 'Lib/baterias.xml';
mxUtils.get(url1, function(req){
         ui.loadLibrary(new LocalLibrary(this, req.getText(),url1));
          });

          
//alert('Cargar Plugin  Piro');
//var totalobjetospaginas = 0;
//if (typeof totalcellsdetect === 'undefined') {totalobjetospaginas = 0; }else{ totalobjetospaginas = totalcellsdetect;}
//var totalobjetostipos = "?";
//var totalobjetosarray = "[id]";
///////////////////// devuelve el id  cell al clickar encima

//////vars
var graph = ui.editor.graph;

var piro_name = [];
//var piro_efectos = ['TT','BC','TRUENO','KAMURO','COLOR','CRACK','RONCADOR'];
var piro_disparos = ['1','3','5','10','20','30','50'];
var piro_cadencia = ['1','2','3','4','5'];
var piro_linea = [];





graph.addListener(mxEvent.CLICK, function (sender, evt) {
     var cell = evt.getProperty("cell");
     var style = evt.getProperty("style"); // style="shape=stencil
     var value = evt.getProperty("value");
     var cparent = evt.getProperty("parent");
     var vertex = evt.getProperty("vertex");
     
     var id = cell.id;
     var cellvalue = cell.value; 
     var styleshape = cell.style;
     var cellparent = cell.cparent;
     var cellvertex = cell.vertex;
     
     //var styleshape_len = styleshape.length; //len chars
     var patron = "shape=stencil(";
     if (styleshape.indexOf(patron) > -1){ var styleshape = styleshape.substr(380,7) ;}
     
     mxLog.show();
     
     mxLog.debug("id " + id);
     mxLog.debug("styl " + styleshape);
     mxLog.debug("Val " + cellvalue);
     mxLog.debug("vert " + cellvertex);
     mxLog.debug("parent  " + cellparent);
    // mxLog.debug(styleshape_len);
    // alert(id);
    // alert(styleshape);
   // cell.setValue('TATO');///actualiza valor en cell
  //  cell.setId('Bat11');///actualiza valor en cell
    var rec_piro_efecto = document.getElementById("Select_piro_efectos").value;
    var rec_piro_efecto_check = document.getElementById("idcheckbox_selectList_piro_efectos").checked;
    
    if (rec_piro_efecto_check == true){
      
    cell.setValue(rec_piro_efecto);///actualiza valor en cell
    graph.refresh();
    //mxUtils.alert(rec_piro_efecto);
   // graph.id.setValue("ttttt");
    }else{graph.refresh();}
    
    
    });
//////////////////

       

///// panel objtotal
var div = document.createElement('div');
  div.id = 'PiroDivPanel';
  
	div.style.background = '#ffffff';
	div.style.border = '1px solid gray';
	div.style.opacity = '0.8';
	div.style.position = 'absolute';
	div.style.padding = '10px';
	div.style.paddingTop = '0px';
	div.style.width = '150px';
  div.style.height ='100px';
	div.style.minWidth = '100px';
	div.style.top = '40px';
	div.style.right = '20px';

if (!ui.editor.chromeless)
	{
		div.style.top = '100px';
		div.style.right = '260px';
	}
 // div.innerHTML = '<p>Obj Total : '+ totalobjetospaginas +' </p>';
	document.body.appendChild(div);
 
////////fin  panel objtotal


/////////////////  funciones panel efectos

var PiroDivPanel = document.getElementById("PiroDivPanel");

var checkbox_selectList_piro_efectos = document.createElement("input");
checkbox_selectList_piro_efectos.setAttribute("type", "checkbox");
checkbox_selectList_piro_efectos.setAttribute("id", "idcheckbox_selectList_piro_efectos");
checkbox_selectList_piro_efectos.setAttribute("name", "checkbox_selectList_piro_efectos");
checkbox_selectList_piro_efectos.setAttribute("value", "ff");
checkbox_selectList_piro_efectos.checked = true; 
PiroDivPanel.appendChild(checkbox_selectList_piro_efectos); 
//do this after you append it
checkbox_selectList_piro_efectos.checked = true; 
//Create array of options to be added
//var piro_efectos = ['TT','BC','TRUENO','KAMURO','COLOR','CRACK','RONCADOR'];
var array_piro_efectos = ['TTT','BC','TRUENO','KAMURO','COLOR','CRACK','RONCADOR',''];

//Create and append select list
var selectList_piro_efectos = document.createElement("select");
selectList_piro_efectos.setAttribute("id", "Select_piro_efectos");
PiroDivPanel.appendChild(selectList_piro_efectos);

//Create and append the options
for (var i = 0; i < array_piro_efectos.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array_piro_efectos[i]);
    option.text = array_piro_efectos[i];
    selectList_piro_efectos.appendChild(option);
}




/////////////// fin funciones panel efectos



////Custom Menu in    
//    // Adds resource for action
  mxResources.parse('pyroAction1=PyroAction1');
		mxResources.parse('pyroAction2=PyroAction2');
		mxResources.parse('pyroAction3=PyroAction3');
//
//    // Adds action
  ui.actions.addAction('pyroAction1', function() {
/////////////////////////////////////////////////////////////////////////////////////////////////////
        
//var graph = ui.editor.graph;
var  cellsdetect = graph.getChildCells(graph.getDefaultParent());  // muestra tantos objetos como haya en la pagina donde estemos , tiene q ser de todas paginas
//var  cellsdetect = graph.getChildVertices(graph.getDefaultParent());  // muestra tantos objetos como haya
var totalcellsdetect = 0;
  for (var i = 0; i < cellsdetect.length; i++)
					{
				  	totalcellsdetect++;    
          }

mxLog.show();
mxLog.debug(totalcellsdetect);
mxUtils.alert("Se detectaron " + totalcellsdetect + " objetos ");

mxUtils.alert(graph.getDefaultParent());
//document.getElementById('objtotal').innerHTML = "<p>Obj Total : "+ totalcellsdetect + "</p>"; //remplaza el texto del div objtotal

 //graph.removeCells(graph.getChildVertices(graph.getDefaultParent())); borra todas las formas
 //var  allcellsvert = graph.getChildVertices(graph.getDefaultParent());  // muestra tantos objetos como haya
 //var  allcellschil = graph.getChildCells(graph.getDefaultParent());  // muestra tantos objetos como haya
//  var cell = allcellschil.getProperty("cell");
 // var id = cell.id;



 

    
 // mxUtils.alert(allcellsvert);                                      
  // mxUtils.alert(allcellschil);    
//////////////////////////////////////////////////////////////////////////////////////////////////
///
   });
	
	  ui.actions.addAction('pyroAction2', function() {
       mxUtils.alert('Pyro Menu vacio2');
       
   });
		
		  ui.actions.addAction('pyroAction3', function() {
       mxUtils.alert('Pyro Menu vacio3');
   });
//
//    // Adds menu
       ui.menubar.addMenu('PyroMenu', function(menu, parent) {
       ui.menus.addMenuItem(menu, 'pyroAction1');
			 ui.menus.addMenuItem(menu, 'pyroAction2');
			 ui.menus.addMenuItem(menu, 'pyroAction3');
			 
   });
//
//    // Reorders menubar
    ui.menubar.container.insertBefore(ui.menubar.container.lastChild,
    ui.menubar.container.lastChild.previousSibling.previousSibling);
//
 
////Custom Menu 


});


