document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os links de redes sociais
    const socialLinks = document.querySelectorAll('.contact-item a[target="_blank"]');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Impede o comportamento padrão de abrir em nova aba
            event.preventDefault();
            
            // Abre o link em uma nova janela/aba
            window.open(this.href, '_blank');
        });
    });

    // Manipulador de envio do formulário (mantido do código anterior)
    const form = document.querySelector('.contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formData = new FormData(form);
        
        fetch('https://formspree.io/f/xvgzgzew', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                form.reset();
                alert('Mensagem enviada com sucesso!');
            } else {
                alert('Erro ao enviar mensagem. Tente novamente.');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro no envio. Verifique sua conexão.');
        });
    });
});