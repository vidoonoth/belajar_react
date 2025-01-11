import PropTypes from 'prop-types';
// props
function Paragraph(props) {
    return <p>ini paragraf ke {props.paragraph}</p>;
}

// props refactor
//menggunakan destructuring dan ternary operator
function Paragraph2({p2}) {
    return <p>ini paragraf 2 ke {p2 ? p2 : 'tidak ada'}</p>;
}


// Menambahkan validasi untuk props
Paragraph.propTypes = {
    paragraph: PropTypes.string.isRequired, // memastikan 'paragraph' adalah string dan wajib ada
};
// Menambahkan validasi untuk props
Paragraph2.propTypes = {
    p2: PropTypes.string, // memastikan 'p2' adalah string (tidak wajib)
};

export { Paragraph, Paragraph2 };