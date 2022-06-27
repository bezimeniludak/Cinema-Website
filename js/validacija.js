$(document).ready(function () {

  $('#form').validate({
    rules: {
      ImePrezime:{
        required:true,
        minlength:6,
      },
      Email:{
        required:true,
        email:true,
      },
      Password:{
        required:true,
        minlength:6,
      },
      Provera:{
        required:true,
        equalTo:'#password'
      },
      Telefon:{
        required:true,
        minlength:10
      },
      Film:"required",
      Sala:"required"
    },
    messages:{
      ImePrezime:{
        required:"Molimo vas da unesete vaše ime.",
        minlength:"Vaše ime i prezime moraju da se sastoje od bar 6 karaktera."
      },
      Email:{
        required:"Molimo vas da unesete vašu E-mail adresu.",
        email:"Molimo vas da unesete vašu E-mail adresu u ispravnom formatu.",
      },
      Password:{
        required:"Molimo vas da unesete vašu lozinku.",
        minlength:"Lozinka mora da ima minimum 6 karaktera.",
      },
      Provera:{
        required:"Molimo vas da ponovo unesete vašu lozinku.",
        equalTo:"Lozinke moraju da se podudaraju.",
      },
      Telefon:{
        required:"Molimo vas da unesete vaš broj telefona.",
        minlength:"Vaš telefon mora da ima minimum 10 brojeva",
      },
      Film:{
        required:"Molimo vas da izaberete jednu opciju",
      },
      Sala:{
        required:"Molimo vas da izaberete jednu opciju",
      },

    },

  })
});