import {
    faFileCircleExclamation,
    faFileCode,
    faFileLines,
    faFilePdf,
    faFileZipper,
    faImage,
    faMusic
  } from '@fortawesome/free-solid-svg-icons';
  
  export const getSystemTheme = () =>
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  
  export const getItemFromStore = (
    key,
    defaultValue,
    store = localStorage
  ) => {
    try {
      return store.getItem(key) === null
        ? defaultValue
        : JSON.parse(store.getItem(key));
    } catch {
      return store.getItem(key) || defaultValue;
    }
  };
  
  export const cleanText = (string) =>
    (string.charAt(0).toUpperCase() + string.slice(1))
      .replace(/-/g, ' ')
      .replace('_and_', '&');
  
  export const setItemToStore = (
    key,
    payload,
    store = localStorage
  ) => store.setItem(key, payload);
  
  export const capitalize = (string) =>
    (string.charAt(0).toUpperCase() + string.slice(1))
      .replace(/-/g, ' ')
      .replace('_and_', '&');
  
  export const snakeCase = (string) => {
    return string
      .replace(/\W+/g, ' ')
      .split(/ |\B(?=[A-Z])/)
      .map(word => word.toLowerCase())
      .join('_');
  };
  
  export const getColor = (name) => {
    const dom = document.documentElement;
    return getComputedStyle(dom).getPropertyValue(`--phoenix-${name}`).trim();
  };
  
  export const getDates = (
    startDate,
    endDate,
    interval = 1000 * 60 * 60 * 24
  ) => {
    const duration = +endDate - +startDate;
    const steps = duration / interval;
    return Array.from(
      { length: steps + 1 },
      (v, i) => new Date(startDate.valueOf() + interval * i)
    );
  };
  
  export const getPastDates = (
    duration
  ) => {
    let days;
  
    switch (duration) {
      case 'week':
        days = 7;
        break;
      case 'month':
        days = 30;
        break;
      case 'year':
        days = 365;
        break;
  
      default:
        days = duration;
    }
  
    const date = new Date();
    const endDate = date;
    const startDate = new Date(new Date().setDate(date.getDate() - (days - 1)));
    return getDates(startDate, endDate);
  };
  
  export const currencyFormat = (
    amount,
    options = {}
  ) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'usd',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
      ...options
    }).format(amount);
  };
  
  export const getNumbersInRange = (startAt, endAt) => {
    return [...Array(endAt + 1 - startAt).keys()].map(i => i + startAt);
  };
  
  export const numberFormat = (
    number,
    notation = 'standard'
  ) =>
    new Intl.NumberFormat('en-US', {
      notation
    }).format(number);
  
  export const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  
  export const getFileIcon = (fileFormat) => {
    switch (fileFormat) {
      case 'zip':
      case 'rar':
        return faFileZipper;
      case 'bat':
        return faFileCode;
      case 'txt':
        return faFileLines;
      case 'mad':
        return faFileCircleExclamation;
      case 'wav':
        return faMusic;
      case 'pdf':
        return faFilePdf;
      case 'jpg':
      case 'png':
      case 'jpeg':
        return faImage;
      default:
        return faFileLines;
    }
  };
  
  export const getIntegerArrayBetween = (start = 0, end) =>
    new Array(end + 1 - start).fill(1).map((_, i) => i + start);
  
  export const parseData = (data) => {
    try {
      return JSON.parse(data);
    } catch {
      return data;
    }
  };
  
  export const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b];
  };
  
  export const rgbaColor = (color = '#fff', alpha = 0.5) =>
    `rgba(${hexToRgb(color)}, ${alpha})`;
  

  
  export const getFileExtension = (fileName, separator = '.') =>
    fileName.split(separator).pop() || 'unknown';
  
  export const isImageFile = (file) => {
    const imageMimeTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp'
    ];
    return imageMimeTypes.includes(file.type);
  };
  
  export const convertFileToAttachment = (file) => ({
    name: file.name,
    size: `${(file.size / 1024).toFixed(2)} KB`,
    format: getFileExtension(file.name),
    preview: isImageFile(file) ? URL.createObjectURL(file) : undefined
  });
  
  export const getProgressColorVariant = (value) => {
    if (value < 21) {
      return 'warning';
    } else if (value < 41) {
      return 'info';
    } else if (value < 81) {
      return 'primary';
    } else {
      return 'success';
    }
  };
  
  export const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'urgent':
        return 'danger';
      case 'high':
        return 'warning';
      case 'medium':
        return 'success';
      case 'low':
        return 'info';
      default:
        return 'primary';
    }
  };
  
  export const invertHex = (hex) =>
    `#${(Number(`0x1${hex.slice(1)}`) ^ 0xffffff)
      .toString(16)
      .substring(1)
      .toUpperCase()}`;
  
  export const getColorByBgColor = (bgColor) => {
    const rgba = hexToRgb(bgColor);
    if (rgba[0] * 0.299 + rgba[1] * 0.587 + rgba[2] * 0.114 > 186) {
      return 'black';
    } else {
      return 'white';
    }
  };
  