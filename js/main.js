
function calculate(){
    var newPayment = eval($('#monthlyIncome').val())*.31;
    var incomeRatio = (eval($('#mortgagePayment').val())/eval($('#monthlyIncome').val()) ) * 100;
      if (isNaN(incomeRatio) ){
        alert('please enter a real number');
      } 
      if (incomeRatio > 31) {
       $('.calculator').hide();
       $('.result-approved').fadeIn();   
       $('#results').html("Please call us immediately at" + "<br>" + "<a style='color:white;' href='tel:2675190101'>" + "267-519-0101" +"</a>"+ "<br/>Your new modified payment would be " +"<strong style='display:block; color:white;'>\$" + newPayment + "</strong>");
       $('#incomeRatio').html(incomeRatio);   
       $('#newPayment').html(newPayment);
       $('#paymentReduction').html(eval($('#mortgagePayment').val())-newPayment);
      }
      else {
      $('.calculator').hide();
       $('.result-disapproved').fadeIn();  
       $('#neg-results').html("But please call us at"+ "<a style='color:white; display:block;' href='tel:2675190101'>"+ "267-519-0101" +"</a>"+ "to review your financial situation because you may still be eligible.");
       $('#incomeRatio').html('');   
       $('#newPayment').html('');
       $('#paymentReduction').html('');
      }     

}

$(document).ready(function(){
    $('#calculateBtn').on('click',function(){
      calculate();   
    })
});