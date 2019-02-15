 $(document).ready( 
    listarCursos = () => {
        $.ajax({
            'datatype': "json",
            'url' : 'https://cefis.com.br/api/v1/event',
            'type' : 'GET',
            'success' : data => {
                criarTabela(data.data);
            }
        })
    }
)
     
$(document).ready(    criarTabela = (data) => {
    let html = "";
    data.forEach(item => {
        html += '<tr>'
        html += '<div class=tablecurso>' + '<td background = "'+ item.banner +'">' +  item.title +   '</div>' + '</td>'
        html += '<td>' + '</td>'
        html += '<td>' + item.subtitle+ '</td>'
        html +=
        '<td style="cursor:pointer;" onClick=getCurso('+item.id+')>' +
        '<b>' + item.id   +'</b></td>'
        html += '</tr>'
    })
    
    $("#listaDeCursos").append(html)
    }
)


getCurso = (id) => {
    $.ajax({
            'datatype': "json",
            'url' : 'https://cefis.com.br/api/v1/event/'+id+'?include=classes',
            'type' : 'GET',
            'success' : data => {
                showSelectedCurso(data.data);
            }
    })
}
    
showSelectedCurso = (data) => {
    var htmlCurso = "";
        $('#principal').hide();
        $('#curso').show();
        htmlCurso += '<tr>'
        htmlCurso += '<td>' + data.title+'</td>'
        htmlCurso += '<td>' + data.subtitle+'</td>'
        htmlCurso += '<td>' + data.id+'</td>'
        htmlCurso += '<td>' + "<img src= '" + data.banner + "'" +  '</td>'
        htmlCurso += '</tr>'
        
        $("#cursoData").append(htmlCurso);
        
}


    
  
