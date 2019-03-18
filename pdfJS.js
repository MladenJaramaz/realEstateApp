

//jQuery example of print out PDF document

$('#button').click(function(){
           Popup($('.forPrint')[0].outerHTML);
           function Popup(data)
           {
               window.print();
               return true;
           }
       });
