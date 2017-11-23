const move = () => {
	const label = []
	const questions = []
	const type = ['NULL','TXT','MA','SA','SUWAK','OA','SORT','LICYTACJA','TEXT_SELECT','SORT_NEW','SElECT','SLIDER_NEW','LIST_SELECT']
	$('.question-wrapper').each(function(a,b){
			let q_text = $(this).find('#QuestionText').val()
			label.push(q_text)
	 	if(a < 1){
			type = type[$(this).find('#QuestionType').find('option:selected').val()]
			$(this).find('.option-table').find('tr').each(function(a,b){
						let q_text = []
					$(this).find('td').each(function(a,b){
						let q_input = $(this).find('.input').find('input'),
							q_input_type =  $(q_input).attr('type')
						if((q_input_type) != 'hidden'){
								if(q_input_type == 'text' && $(q_input).val().length != 0){
										q_text.push($(q_input).val())
								}
								if(q_input_type == 'checkbox'){
										$(q_input).prop('checked')?q_text.push('1'):q_text.push('0')
								}
							}
					})
					if(q_text.length > 0) questions.push("\n"+"\t"+q_text[0]+';'+q_text[1]+';'+q_text[4]+';'+q_text[2]+';'+q_text[3])
			})
		}
	})
	if(label.length > 1){
		console.log(`[${type}][${label.join('|')}]Treść pytania`,`${questions.join("")}`)
	}else{
		console.log(`[${type}]${label}`,`${questions.join("")}`)
	}
}
