import PropTypes from 'prop-types';


const SectionHeader = ({ sectionTop, sectionTitle }) => {
    return (
        <div className={sectionTop && 'mt-28'}>
            {sectionTop ? <h4 className='mb-2'>{sectionTop}</h4> : ''}
            <h2 className="text-5xl font-rancho text-[#331A15] [text-shadow:_2px_2px_8px_#242222EE]">{sectionTitle}</h2>
        </div>
    );
};

SectionHeader.propTypes = {
    sectionTop: PropTypes.string,
    sectionTitle: PropTypes.string.isRequired
}

export default SectionHeader;