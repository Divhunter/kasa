import './m-tags.css'
import './d-tags.css'

const Tag = (props) => {
	return (
		<span className='tags'>{props.tag}</span>
	)
}

export default Tag