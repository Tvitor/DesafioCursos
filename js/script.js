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
     
$(document).ready(criarTabela = (data) => {
    let html = "";
    data.forEach(item => {
        html += '<tr>'
        html += '<td>' + '<img class="banner" src="'+item.banner +'">'+
        '<div class="titulos">' + item.title  +  '</div>'  + item.subtitle +
        '<div style="cursor:pointer;" onClick=getCurso('+item.id+')>' +
        '<b>' + item.id   +'</b></div>' + '</td>' + '</tr>'
        
        
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