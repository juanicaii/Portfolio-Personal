import styles from './Logo.module.css'

const Logo = () => {
  return (
    <svg
      className={styles.logo}
      width="111"
      height="53"
      viewBox="0 0 111 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FF0000"
        d="M0.520001 31.6C0.520001 30.4 0.928001 29.392 1.744 28.576C2.608 27.712 3.64 27.28 4.84 27.28C6.04 27.28 7.048 27.712 7.864 28.576C8.728 29.392 9.16 30.4 9.16 31.6C9.16 34.816 10.312 37.624 12.616 40.024C15.016 42.328 17.824 43.48 21.04 43.48C24.304 43.48 27.088 42.328 29.392 40.024C31.744 37.672 32.92 34.864 32.92 31.6V4.6C32.92 3.4 33.328 2.392 34.144 1.576C35.008 0.711997 36.04 0.279996 37.24 0.279996C38.44 0.279996 39.448 0.711997 40.264 1.576C41.128 2.392 41.56 3.4 41.56 4.6V31.6C41.56 37.264 39.544 42.112 35.512 46.144C31.528 50.128 26.704 52.12 21.04 52.12C15.424 52.12 10.576 50.128 6.496 46.144C2.512 42.064 0.520001 37.216 0.520001 31.6ZM86.8593 43.48H89.0193C97.8993 43.48 102.339 41.32 102.339 37C102.339 32.68 97.8993 30.52 89.0193 30.52C82.3473 30.52 77.0193 29.248 73.0352 26.704C69.0513 24.16 67.0593 20.392 67.0593 15.4C67.0593 10.696 69.0753 7 73.1073 4.312C77.2353 1.624 82.5393 0.279996 89.0193 0.279996C95.2113 0.279996 100.803 1.36 105.795 3.52C106.995 4.048 107.835 4.816 108.315 5.824C108.843 6.832 108.891 7.888 108.459 8.992C107.451 11.536 105.651 12.424 103.059 11.656C98.5473 9.832 93.8673 8.92 89.0193 8.92C80.1393 8.92 75.6992 11.08 75.6992 15.4C75.6992 19.72 80.1393 21.88 89.0193 21.88C95.6913 21.88 101.019 23.152 105.003 25.696C108.987 28.24 110.979 32.008 110.979 37C110.979 41.752 108.939 45.448 104.859 48.088C100.779 50.776 95.4993 52.12 89.0193 52.12H86.8593C80.7153 52.12 75.1233 51.064 70.0833 48.952C68.9793 48.568 68.1393 47.824 67.5633 46.72C67.0353 45.568 66.9873 44.44 67.4193 43.336C67.8993 42.136 68.6433 41.32 69.6513 40.888C70.7073 40.408 71.7873 40.36 72.8913 40.744C77.7873 42.568 82.4433 43.48 86.8593 43.48Z"
      />
    </svg>
  )
}

export default Logo