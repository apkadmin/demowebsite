import { createElement } from '@wordpress/element'

const Text = ({ value, option, onChange }) => (
	<div className="ct-option-input">
		<input
			type="text"
			value={value}
			{...{
				...(option.field_attr ? option.field_attr : {}),
				...(option.attr && option.attr.placeholder
					? {
							placeholder: option.attr.placeholder,
					  }
					: {}),
			}}
			onChange={({ target: { value } }) => onChange(value)}
		/>
	</div>
)

export default Text
