$(document).ready(()=>{
    $("#increase").click(()=>{
        $('#demo').html((i, val)=> { return +val+1});
      
    });
  });

    
  $(document).ready(()=>{
    $("#decrease").click(()=>{
        $('#demo').html((i, val)=>{
             return +val-1 
        });
    });
  });  