$(document).ready(()=>{
    $("#increase").click(()=>{
        $('#demo').html((i, val)=> { 
            const inval=+val+1;
            if(inval<0){
                $('#demo').css('color','red')
              }else{
                $('#demo').css('color','#ffffff')
              }
            return inval
        });
      
    });
  });

    
  $(document).ready(()=>{
    $("#decrease").click(()=>{
        $('#demo').html((i, val)=>{
          const dval=+val-1;
          if(dval<0){
            $('#demo').css('color','red')
          }else{
            $('#demo').css('color','#ffffff')
          }
             return dval 
        });
    });
  });  


  