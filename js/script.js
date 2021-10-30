var newHomes = [
    {
      address: "27569 Cedarwood Drive",
      sf: "2,535",
      bedrooms: 3,
      baths: 2.5,
      price: "$496,500",
    },
    {
      address: "316 Annandale Drive",
      sf: "1,326",
      bedrooms: 4,
      baths: 2,
      price: "$275,000",
    },
    {
      address: "251 Grandview Road",
      sf: "3,800",
      bedrooms: 3,
      baths: 2,
      price: "$699,900",
    },
    {
      address: "28571 Manitoba",
      sf: "2,960",
      bedrooms: 4,
      baths: 3.5,
      price: "$775,000",
    },
  ]

  $("#addHome").on("click", function(){
      let newHome = newHomes[0];
      let $tr = $(`<tr>
      <td>${newHome.address}</td>
      <td>${newHome.sf}</td>
      <td>${newHome.bedrooms}</td>
      <td>${newHome.baths}</td>
      <td>${newHome.price}</td>
      <td><button class="btn btn-xs btn-danger">Remove</button></td>
      </tr>`)
      $("tbody").append($tr);
      newHomes.shift();

      if (newHomes.length < 1) {
        this.remove();
        $("body").append(`<button id="addHomesBack" class="btn-success">Add Homes Back</button`)
        $("#addHomesBack").on("click", function() {
            $("tr").fadeIn();
        })
      }
  })
  