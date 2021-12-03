window.onload = function () {
    console.log('Conexion establecida');

    let $title = document.getElementById('title');
    let $rating = document.getElementById('rating');
    let $awards = document.getElementById('awards');
    let $release_date = document.getElementById('release_date');
    let $length = document.getElementById('length');
    let $genre = document.getElementById('genre');
    let $ul = document.querySelector('.errores');
    let $form = document.getElementById('form');

    $title.focus();
    $title.addEventListener('blur', () => {
        if (!$title.value) {
            $title.classList.add('is-invalid');
            document.getElementById('invalid-title').innerHTML = 'El campo titulo es obligatorio <br>';
        } else {
            document.getElementById('invalid-title').innerHTML = null;
            $title.classList.remove('is-invalid');
            $title.classList.add('is-valid');
        }
    })
    $rating.addEventListener('blur', () => {
        if (!$rating.value) {
            $rating.classList.add('is-invalid');
            document.getElementById('invalid-rating').innerHTML = 'El campo calificación es obligatorio <br>';
        } else if (!($rating.value > 0 && $rating.value <= 10)) {
            $rating.classList.add('is-invalid');
            document.getElementById('invalid-rating').innerHTML = 'El campo calificación debe ser un numero entre 0 y 10 <br>';
        } else {
            document.getElementById('invalid-rating').innerHTML = null;
            $rating.classList.remove('is-invalid');
            $rating.classList.add('is-valid');
        }
    })
    $awards.addEventListener('blur', () => {
        if (!$awards.value) {
            $awards.classList.add('is-invalid');
            document.getElementById('invalid-awards').innerHTML = 'El campo premios es obligatorio <br>';
        } else if (!($awards.value > 0 && $awards.value <= 10)) {
            $awards.classList.add('is-invalid');
            document.getElementById('invalid-awards').innerHTML = 'El campo premios debe ser un numero entre 0 y 10 <br>';
        }
        else {
            document.getElementById('invalid-awards').innerHTML = null;
            $awards.classList.remove('is-invalid');
            $awards.classList.add('is-valid');
        }
    })
    $release_date.addEventListener('blur', () => {
        if (!$release_date.value) {
            $release_date.classList.add('is-invalid');
            document.getElementById('invalid-release_date').innerHTML = 'El campo fecha de creacion es obligatorio <br>';
        } else {
            document.getElementById('invalid-release_date').innerHTML = null;
            $release_date.classList.remove('is-invalid');
            $release_date.classList.add('is-valid');
        }
    })
    $length.addEventListener('blur', () => {
        if (!$length.value) {
            $length.classList.add('is-invalid');
            document.getElementById('invalid-length').innerHTML = 'El campo duración es obligatorio <br>';
        } else if (!($length.value > 60 && $length.value <= 360)) {
            $length.classList.add('is-invalid');
            document.getElementById('invalid-length').innerHTML = 'El campo duración debe estar entre 60 y 360 minutos <br>';
        }
        else {
            document.getElementById('invalid-length').innerHTML = null;
            $length.classList.remove('is-invalid');
            $length.classList.add('is-valid');
        }
    })
    $genre.addEventListener('blur', () => {
        if (!$genre.value) {
            $genre.classList.add('is-invalid');
            document.getElementById('invalid-genre').innerHTML = 'El campo género es obligatorio <br>';
        } else {
            document.getElementById('invalid-genre').innerHTML = null;
            $genre.classList.remove('is-invalid');
            $genre.classList.add('is-valid');
        }
    })

    $form.onsubmit = (event) => {
        event.preventDefault();

        let $inputs = [];
        let errores = [];

        $inputs.push($title);
        $inputs.push($rating);
        $inputs.push($awards);
        $inputs.push($release_date);
        $inputs.push($length);
        $inputs.push($genre);

        $inputs.forEach(($input, index) => {
            if (!$input.value) {
                $input.classList.add('is-invalid');
                let label = document.querySelectorAll('label');
                errores.push(`El campo ${label[index].innerText} es obligatorio`);
            }
        });

        if (errores.length > 1) {
            errores.forEach((error) => {
                $ul.innerHTML += '<li>' + `${error}` + '</li>'
            })
        } else {
            $form.submit();
            alert('La película se guardó satisfactoriamente.');
        }
    }
}