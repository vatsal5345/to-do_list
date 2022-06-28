$('#submit').click(function(){
    let val=$('#add_text').val();

    $('#add_text').val("")
    if(val !== ""){
        $('.output_table').append(`
        <tr>
                <td>${val}</td>
                <td>
                    <input type="button" value="done" class="done">
                    <input type="button" value="undone" class="undone">
                    <input type="button" value="delete" class="delete">
                </td>
                <td id="symbol">  </td>
                </tr>
        `)
    }
    $('.done').click(function(){
        // alert("hi");
        $(this).parent().siblings('#symbol').html('&#9989');
    });
    $('.undone').click(function(){
        // alert("hi");
        $(this).parent().siblings('#symbol').html('&#x274C');
        
    });

    $('.delete').click(function(){
        let tablength = $('.output_table tr').length;
        if(tablength > 1 && $(this).parent().siblings('#symbol').html() === '❌'){
            $(this).parent().parent().remove();
    }
    })



    });




    
// &#x274C; &#9989;
