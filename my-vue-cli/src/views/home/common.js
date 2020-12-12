import styles from './style.js';

const {
    fontSize, color,borderTop, whiteSpace
} = styles;

// 常用样式汇总
export default {
    ...styles,
    font_Size_color: { fontSize, color, whiteSpace },
    borderTop3: {borderTop: '3px solid #000'},
    pagePadding: {
        padding: '20px 20px 0 20px'
    }
}