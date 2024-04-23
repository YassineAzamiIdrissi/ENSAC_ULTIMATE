import { faCircle, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { getFileIcon } from 'helpers/utils';

const AttachmentPreview = ({
  attachment,
  variant = 'primary',
  size = 'lg',
  url = '#!',
  handleRemove
}) => {
  return (
    <a href={url} className="text-decoration-none d-flex align-items-center">
      <div
        className={classNames(
          `btn-icon btn-icon-${size} rounded-3 flex-column me-2 position-relative`,
          {
            border: !attachment.preview,
            'text-body-quaternary': variant === 'primary',
            'border-light-subtle text-white': variant === 'secondary'
          }
        )}
      >
        {attachment.preview ? (
          <img
            src={attachment.preview}
            alt={attachment.name}
            className="w-100 rounded"
          />
        ) : (
          <>
            <FontAwesomeIcon
              icon={getFileIcon(attachment.format)}
              className={classNames('fs-8 mb-1')}
            />
            <p className="mb-0 fs-10 fw-bold lh-1">{attachment.format}</p>
          </>
        )}

        {handleRemove && (
          <button className="btn btn-x" onClick={handleRemove}>
            <FontAwesomeIcon icon={faXmark} className="text-body" />
          </button>
        )}
      </div>

      <div className="flex-1">
        <h6
          className={classNames('line-clamp-1 text-break', {
            'text-body': variant === 'primary',
            'text-white': variant === 'secondary'
          })}
        >
          {attachment.name}
        </h6>
        <div
          className={classNames(
            'd-flex align-items-center lh-1 fw-semibold fs-10',
            {
              'text-body-tertiary': variant == 'primary',
              'text-light': variant == 'secondary'
            }
          )}
        >
          <p className="mb-0 text-nowrap">{attachment.size}</p>
          {attachment.date && (
            <>
              <FontAwesomeIcon
                icon={faCircle}
                className="text-body-quaternary"
                transform="shrink-12"
              />
              <p className="mb-0 text-nowrap">{attachment.date}</p>
            </>
          )}
        </div>
      </div>
    </a>
  );
};

export default AttachmentPreview;
