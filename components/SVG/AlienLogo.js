const AlienLogo = (props) => {
  return (
    <svg
      width={35}
      height={35}
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke={props.stroke || ''}
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
      {...props}
    >
      <path d='M0 0h24v24H0z' stroke='none' />
      <path d='M11 17a2.5 2.5 0 002 0M12 3C7.336 3 4.604 5.331 4.138 8.595a11.816 11.816 0 002 8.592 10.777 10.777 0 003.199 3.064c1.666 1 3.664 1 5.33 0a10.777 10.777 0 003.199-3.064 11.89 11.89 0 002-8.592C19.4 5.33 16.668 3 12.004 3zM8 11l2 2M16 11l-2 2' />
    </svg>
  );
};

export default AlienLogo;
