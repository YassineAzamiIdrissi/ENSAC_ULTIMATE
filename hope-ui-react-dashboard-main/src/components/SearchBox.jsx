import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { Form } from 'react-bootstrap';


const SearchBox = ({
  placeholder = 'Search',
  size,
  className,
  inputClassName,
  formClassName,
  style,
  ...rest
}) => {
  return (
    <div className={classNames('search-box', className)} style={style}>
      <form className={classNames('position-relative', formClassName)}>
        <Form.Control
          type="search"
          placeholder={placeholder}
          className={classNames('search-input search', inputClassName)}
          size={size}
          {...rest}
        />
        <FontAwesomeIcon icon={faSearch} className="search-box-icon" />
      </form>
    </div>
  );
};

export default SearchBox;
