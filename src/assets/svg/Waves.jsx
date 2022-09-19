import React from "react"
import styled, { keyframes } from "styled-components"

export default function Waves({color}) {
    return(
        <SVG width="4212" height="159" viewBox="0 0 4212 159" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="line_4 line" d="M35 127C62.6667 126 125.7 120.9 156.5 108.5C195 93.0001 248.5 59.5001 273 51.0001C297.5 42.5001 328.049 40.8401 371.5 44.0001C399 46 427 46.5 467.5 59.5C481.339 63.9421 536 86.1322 569.5 85.5001C596 85.0001 627 83.0002 664.5 63.5001C702 44.0001 732 40.5001 744.5 40.0001C757 39.5001 771 34.5001 868.5 72.5001C946.5 102.9 1040.33 93.8335 1077.5 85.5001C1090.67 83.8335 1126 76.9002 1162 62.5002C1207 44.5002 1228 27.5002 1278 26.5002C1328 25.5002 1411 36.0002 1436.5 43.0002C1462 50.0002 1515 62.5002 1543.5 62.5002C1572 62.5002 1636 35.5001 1656.5 32.5001C1677 29.5001 1718.5 19.8001 1778.5 37.0001C1853.5 58.5001 1889 68 1919.5 69C1950 70 1967.5 65 1994 69C2020.5 73 2069 81 2120 97.5C2171 114 2207.5 116 2249 104C2290.5 92 2328.5 71 2374 76.5C2419.5 82 2480 97.5 2511.5 101C2543 104.5 2600 112 2626.5 110.5C2653 109 2691 99 2721 83.5C2751 68 2785 56 2826.5 49.5C2868 43 2916 39.5 2951.5 42C2987 44.5 3021 56.5 3076 78.5C3131 100.5 3151 97 3176 95C3201 93 3250 71 3262.5 65C3275 59 3300.5 48.5 3334 51.5C3367.5 54.5 3404.55 66.7289 3419.5 71.5C3466.5 86.5 3538.5 92.5 3551 94C3563.5 95.5 3608.5 95.5 3632.5 85.5C3656.5 75.5 3676.5 60 3712.5 43C3748.5 26 3797.5 15.5 3819 13.5C3836.2 11.9 3860.83 9.83333 3871 9" stroke={color} strokeOpacity="0.4"/>
            <path className="line_5 line" d="M44 128C71.6667 127 134.7 121.9 165.5 109.5C204 94.0001 257.5 60.5001 282 52.0001C306.5 43.5001 337.049 41.8401 380.5 45.0001C408 47 436 47.5 476.5 60.5C490.339 64.9421 545 87.1322 578.5 86.5001C605 86.0001 636 84.0002 673.5 64.5001C711 45.0001 741 41.5001 753.5 41.0001C766 40.5001 780 35.5001 877.5 73.5001C955.5 103.9 1049.33 94.8335 1086.5 86.5001C1099.67 84.8335 1135 77.9002 1171 63.5002C1216 45.5002 1237 28.5002 1287 27.5002C1337 26.5002 1420 37.0002 1445.5 44.0002C1471 51.0002 1524 63.5002 1552.5 63.5002C1581 63.5002 1645 36.5001 1665.5 33.5001C1686 30.5001 1727.5 20.8001 1787.5 38.0001C1862.5 59.5001 1898 69 1928.5 70C1959 71 1976.5 66 2003 70C2029.5 74 2078 82 2129 98.5C2180 115 2216.5 117 2258 105C2299.5 93 2337.5 72 2383 77.5C2428.5 83 2489 98.5 2520.5 102C2552 105.5 2609 113 2635.5 111.5C2662 110 2700 100 2730 84.5C2760 69 2794 57 2835.5 50.5C2877 44 2925 40.5 2960.5 43C2996 45.5 3030 57.5 3085 79.5C3140 101.5 3160 98 3185 96C3210 94 3259 72 3271.5 66C3284 60 3309.5 49.5 3343 52.5C3376.5 55.5 3413.55 67.7289 3428.5 72.5C3475.5 87.5 3547.5 93.5 3560 95C3572.5 96.5 3617.5 96.5 3641.5 86.5C3665.5 76.5 3685.5 61 3721.5 44C3757.5 27 3806.5 16.5 3828 14.5C3845.2 12.9 3869.83 10.8333 3880 10" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="1.5 5"/>
            <path className="line_6 line" d="M63 131C90.6667 130 153.7 124.9 184.5 112.5C223 97.0001 276.5 63.5001 301 55.0001C325.5 46.5001 356.049 44.8401 399.5 48.0001C427 50 455 50.5 495.5 63.5C509.339 67.9421 564 90.1322 597.5 89.5001C624 89.0001 655 87.0002 692.5 67.5001C730 48.0001 760 44.5001 772.5 44.0001C785 43.5001 799 38.5001 896.5 76.5001C974.5 106.9 1068.33 97.8335 1105.5 89.5001C1118.67 87.8335 1154 80.9002 1190 66.5002C1235 48.5002 1256 31.5002 1306 30.5002C1356 29.5002 1439 40.0002 1464.5 47.0002C1490 54.0002 1543 66.5002 1571.5 66.5002C1600 66.5002 1664 39.5001 1684.5 36.5001C1705 33.5001 1746.5 23.8001 1806.5 41.0001C1881.5 62.5001 1917 72 1947.5 73C1978 74 1995.5 69 2022 73C2048.5 77 2097 85 2148 101.5C2199 118 2235.5 120 2277 108C2318.5 96 2356.5 75 2402 80.5C2447.5 86 2508 101.5 2539.5 105C2571 108.5 2628 116 2654.5 114.5C2681 113 2719 103 2749 87.5C2779 72 2813 60 2854.5 53.5C2896 47 2944 43.5 2979.5 46C3015 48.5 3049 60.5 3104 82.5C3159 104.5 3179 101 3204 99C3229 97 3278 75 3290.5 69C3303 63 3328.5 52.5 3362 55.5C3395.5 58.5 3432.55 70.7289 3447.5 75.5C3494.5 90.5 3566.5 96.5 3579 98C3591.5 99.5 3636.5 99.5 3660.5 89.5C3684.5 79.5 3704.5 64 3740.5 47C3776.5 30 3825.5 19.5 3847 17.5C3864.2 15.9 3888.83 13.8333 3899 13" stroke={color} strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="1.5 5"/>
            <path className="line_7 line" d="M89 132C116.667 131 179.7 125.9 210.5 113.5C249 98.0001 302.5 64.5001 327 56.0001C351.5 47.5001 382.049 45.8401 425.5 49.0001C453 51 481 51.5 521.5 64.5C535.339 68.9421 590 91.1322 623.5 90.5001C650 90.0001 681 88.0002 718.5 68.5001C756 49.0001 786 45.5001 798.5 45.0001C811 44.5001 825 39.5001 922.5 77.5001C1000.5 107.9 1094.33 98.8335 1131.5 90.5001C1144.67 88.8335 1180 81.9002 1216 67.5002C1261 49.5002 1282 32.5002 1332 31.5002C1382 30.5002 1465 41.0002 1490.5 48.0002C1516 55.0002 1569 67.5002 1597.5 67.5002C1626 67.5002 1690 40.5001 1710.5 37.5001C1731 34.5001 1772.5 24.8001 1832.5 42.0001C1907.5 63.5001 1943 73 1973.5 74C2004 75 2021.5 70 2048 74C2074.5 78 2123 86 2174 102.5C2225 119 2261.5 121 2303 109C2344.5 97 2382.5 76 2428 81.5C2473.5 87 2534 102.5 2565.5 106C2597 109.5 2654 117 2680.5 115.5C2707 114 2745 104 2775 88.5C2805 73 2839 61 2880.5 54.5C2922 48 2970 44.5 3005.5 47C3041 49.5 3075 61.5 3130 83.5C3185 105.5 3205 102 3230 100C3255 98 3304 76 3316.5 70C3329 64 3354.5 53.5 3388 56.5C3421.5 59.5 3458.55 71.7289 3473.5 76.5C3520.5 91.5 3592.5 97.5 3605 99C3617.5 100.5 3662.5 100.5 3686.5 90.5C3710.5 80.5 3730.5 65 3766.5 48C3802.5 31 3851.5 20.5 3873 18.5C3890.2 16.9 3914.83 14.8333 3925 14" stroke={color} strokeOpacity="0.45" strokeWidth="1.5" strokeDasharray="1.5 5"/>
            <path className="line_8 line" d="M112 129C139.667 128 202.7 122.9 233.5 110.5C272 95.0001 325.5 61.5001 350 53.0001C374.5 44.5001 405.049 42.8401 448.5 46.0001C476 48 504 48.5 544.5 61.5C558.339 65.9421 613 88.1322 646.5 87.5001C673 87.0001 704 85.0002 741.5 65.5001C779 46.0001 809 42.5001 821.5 42.0001C834 41.5001 848 36.5001 945.5 74.5001C1023.5 104.9 1117.33 95.8335 1154.5 87.5001C1167.67 85.8335 1203 78.9002 1239 64.5002C1284 46.5002 1305 29.5002 1355 28.5002C1405 27.5002 1488 38.0002 1513.5 45.0002C1539 52.0002 1592 64.5002 1620.5 64.5002C1649 64.5002 1713 37.5001 1733.5 34.5001C1754 31.5001 1795.5 21.8001 1855.5 39.0001C1930.5 60.5001 1966 70 1996.5 71C2027 72 2044.5 67 2071 71C2097.5 75 2146 83 2197 99.5C2248 116 2284.5 118 2326 106C2367.5 94 2405.5 73 2451 78.5C2496.5 84 2557 99.5 2588.5 103C2620 106.5 2677 114 2703.5 112.5C2730 111 2768 101 2798 85.5C2828 70 2862 58 2903.5 51.5C2945 45 2993 41.5 3028.5 44C3064 46.5 3098 58.5 3153 80.5C3208 102.5 3228 99 3253 97C3278 95 3327 73 3339.5 67C3352 61 3377.5 50.5 3411 53.5C3444.5 56.5 3481.55 68.7289 3496.5 73.5C3543.5 88.5 3615.5 94.5 3628 96C3640.5 97.5 3685.5 97.5 3709.5 87.5C3733.5 77.5 3753.5 62 3789.5 45C3825.5 28 3874.5 17.5 3896 15.5C3913.2 13.9 3937.83 11.8333 3948 11" stroke={color} strokeOpacity="0.4" strokeWidth="1.5" strokeDasharray="1.5 5"/>
            <path className="line_10 line" d="M131 123C158.667 122 221.7 116.9 252.5 104.5C291 89.0001 344.5 55.5001 369 47.0001C393.5 38.5001 424.049 36.8401 467.5 40.0001C495 42 523 42.5 563.5 55.5C577.339 59.9421 632 82.1322 665.5 81.5001C692 81.0001 723 79.0002 760.5 59.5001C798 40.0001 828 36.5001 840.5 36.0001C853 35.5001 867 30.5001 964.5 68.5001C1042.5 98.9001 1136.33 89.8335 1173.5 81.5001C1186.67 79.8335 1222 72.9002 1258 58.5002C1303 40.5002 1324 23.5002 1374 22.5002C1424 21.5002 1507 32.0002 1532.5 39.0002C1558 46.0002 1611 58.5002 1639.5 58.5002C1668 58.5002 1732 31.5001 1752.5 28.5001C1773 25.5001 1814.5 15.8001 1874.5 33.0001C1949.5 54.5001 1985 64 2015.5 65C2046 66 2063.5 61 2090 65C2116.5 69 2165 77 2216 93.5C2267 110 2303.5 112 2345 100C2386.5 88 2424.5 67 2470 72.5C2515.5 78 2576 93.5 2607.5 97C2639 100.5 2696 108 2722.5 106.5C2749 105 2787 95 2817 79.5C2847 64 2881 52 2922.5 45.5C2964 39 3012 35.5 3047.5 38C3083 40.5 3117 52.5 3172 74.5C3227 96.5 3247 93 3272 91C3297 89 3346 67 3358.5 61C3371 55 3396.5 44.5 3430 47.5C3463.5 50.5 3500.55 62.7289 3515.5 67.5C3562.5 82.5 3634.5 88.5 3647 90C3659.5 91.5 3704.5 91.5 3728.5 81.5C3752.5 71.5 3772.5 56 3808.5 39C3844.5 22 3893.5 11.5 3915 9.5C3932.2 7.9 3956.83 5.83333 3967 5" stroke={color} strokeOpacity="0.35" strokeWidth="1.5" strokeDasharray="1.5 5"/>
            <path className="line_12 line" d="M185 126C212.667 125 275.7 119.9 306.5 107.5C345 92.0001 398.5 58.5001 423 50.0001C447.5 41.5001 478.049 39.8401 521.5 43.0001C549 45 577 45.5 617.5 58.5C631.339 62.9421 686 85.1322 719.5 84.5001C746 84.0001 777 82.0002 814.5 62.5001C852 43.0001 882 39.5001 894.5 39.0001C907 38.5001 921 33.5001 1018.5 71.5001C1096.5 101.9 1190.33 92.8335 1227.5 84.5001C1240.67 82.8335 1276 75.9002 1312 61.5002C1357 43.5002 1378 26.5002 1428 25.5002C1478 24.5002 1561 35.0002 1586.5 42.0002C1612 49.0002 1665 61.5002 1693.5 61.5002C1722 61.5002 1786 34.5001 1806.5 31.5001C1827 28.5001 1868.5 18.8001 1928.5 36.0001C2003.5 57.5001 2039 67 2069.5 68C2100 69 2117.5 64 2144 68C2170.5 72 2219 80 2270 96.5C2321 113 2357.5 115 2399 103C2440.5 91 2478.5 70 2524 75.5C2569.5 81 2630 96.5 2661.5 100C2693 103.5 2750 111 2776.5 109.5C2803 108 2841 98 2871 82.5C2901 67 2935 55 2976.5 48.5C3018 42 3066 38.5 3101.5 41C3137 43.5 3171 55.5 3226 77.5C3281 99.5 3301 96 3326 94C3351 92 3400 70 3412.5 64C3425 58 3450.5 47.5 3484 50.5C3517.5 53.5 3554.55 65.7289 3569.5 70.5C3616.5 85.5 3688.5 91.5 3701 93C3713.5 94.5 3758.5 94.5 3782.5 84.5C3806.5 74.5 3826.5 59 3862.5 42C3898.5 25 3947.5 14.5 3969 12.5C3986.2 10.9 4010.83 8.83333 4021 8" stroke={color} strokeOpacity="0.2" strokeDasharray="1.5 5"/>
            <path className="line_11 line" d="M154 119C181.667 118 244.7 112.9 275.5 100.5C314 85.0001 367.5 51.5001 392 43.0001C416.5 34.5001 447.049 32.8401 490.5 36.0001C518 38 546 38.5 586.5 51.5C600.339 55.9421 655 78.1322 688.5 77.5001C715 77.0001 746 75.0002 783.5 55.5001C821 36.0001 851 32.5001 863.5 32.0001C876 31.5001 890 26.5001 987.5 64.5001C1065.5 94.9001 1159.33 85.8335 1196.5 77.5001C1209.67 75.8335 1245 68.9002 1281 54.5002C1326 36.5002 1347 19.5002 1397 18.5002C1447 17.5002 1530 28.0002 1555.5 35.0002C1581 42.0002 1634 54.5002 1662.5 54.5002C1691 54.5002 1755 27.5001 1775.5 24.5001C1796 21.5001 1837.5 11.8001 1897.5 29.0001C1972.5 50.5001 2008 60 2038.5 61C2069 62 2086.5 57 2113 61C2139.5 65 2188 73 2239 89.5C2290 106 2326.5 108 2368 96C2409.5 84 2447.5 63 2493 68.5C2538.5 74 2599 89.5 2630.5 93C2662 96.5 2719 104 2745.5 102.5C2772 101 2810 91 2840 75.5C2870 60 2904 48 2945.5 41.5C2987 35 3035 31.5 3070.5 34C3106 36.5 3140 48.5 3195 70.5C3250 92.5 3270 89 3295 87C3320 85 3369 63 3381.5 57C3394 51 3419.5 40.5 3453 43.5C3486.5 46.5 3523.55 58.7289 3538.5 63.5C3585.5 78.5 3657.5 84.5 3670 86C3682.5 87.5 3727.5 87.5 3751.5 77.5C3775.5 67.5 3795.5 52 3831.5 35C3867.5 18 3916.5 7.5 3938 5.5C3955.2 3.9 3979.83 1.83333 3990 1" stroke={color} strokeOpacity="0.3" strokeDasharray="1.5 5"/>
            <path className="line_9 line" d="M134 119C161.667 118 224.7 112.9 255.5 100.5C294 85.0001 347.5 51.5001 372 43.0001C396.5 34.5001 427.049 32.8401 470.5 36.0001C498 38 526 38.5 566.5 51.5C580.339 55.9421 635 78.1322 668.5 77.5001C695 77.0001 726 75.0002 763.5 55.5001C801 36.0001 831 32.5001 843.5 32.0001C856 31.5001 870 26.5001 967.5 64.5001C1045.5 94.9001 1139.33 85.8335 1176.5 77.5001C1189.67 75.8335 1225 68.9002 1261 54.5002C1306 36.5002 1327 19.5002 1377 18.5002C1427 17.5002 1510 28.0002 1535.5 35.0002C1561 42.0002 1614 54.5002 1642.5 54.5002C1671 54.5002 1735 27.5001 1755.5 24.5001C1776 21.5001 1817.5 11.8001 1877.5 29.0001C1952.5 50.5001 1988 60 2018.5 61C2049 62 2066.5 57 2093 61C2119.5 65 2168 73 2219 89.5C2270 106 2306.5 108 2348 96C2389.5 84 2427.5 63 2473 68.5C2518.5 74 2579 89.5 2610.5 93C2642 96.5 2699 104 2725.5 102.5C2752 101 2790 91 2820 75.5C2850 60 2884 48 2925.5 41.5C2967 35 3015 31.5 3050.5 34C3086 36.5 3120 48.5 3175 70.5C3230 92.5 3250 89 3275 87C3300 85 3349 63 3361.5 57C3374 51 3399.5 40.5 3433 43.5C3466.5 46.5 3503.55 58.7289 3518.5 63.5C3565.5 78.5 3637.5 84.5 3650 86C3662.5 87.5 3707.5 87.5 3731.5 77.5C3755.5 67.5 3775.5 52 3811.5 35C3847.5 18 3896.5 7.5 3918 5.5C3935.2 3.9 3959.83 1.83333 3970 1" stroke={color} strokeOpacity="0.35" strokeDasharray="1.5 5"/>
            <path className="line_3 line" d="M15 133C42.6667 132 105.7 126.9 136.5 114.5C175 99.0001 228.5 65.5001 253 57.0001C277.5 48.5001 308.049 46.8401 351.5 50.0001C379 52 407 52.5 447.5 65.5C461.339 69.9421 516 92.1322 549.5 91.5001C576 91.0001 607 89.0002 644.5 69.5001C682 50.0001 712 46.5001 724.5 46.0001C737 45.5001 751 40.5001 848.5 78.5001C926.5 108.9 1020.33 99.8335 1057.5 91.5001C1070.67 89.8335 1106 82.9002 1142 68.5002C1187 50.5002 1208 33.5002 1258 32.5002C1308 31.5002 1391 42.0002 1416.5 49.0002C1442 56.0002 1495 68.5002 1523.5 68.5002C1552 68.5002 1616 41.5001 1636.5 38.5001C1657 35.5001 1698.5 25.8001 1758.5 43.0001C1833.5 64.5001 1869 74 1899.5 75C1930 76 1947.5 71 1974 75C2000.5 79 2049 87 2100 103.5C2151 120 2187.5 122 2229 110C2270.5 98 2308.5 77 2354 82.5C2399.5 88 2460 103.5 2491.5 107C2523 110.5 2580 118 2606.5 116.5C2633 115 2671 105 2701 89.5C2731 74 2765 62 2806.5 55.5C2848 49 2896 45.5 2931.5 48C2967 50.5 3001 62.5 3056 84.5C3111 106.5 3131 103 3156 101C3181 99 3230 77 3242.5 71C3255 65 3280.5 54.5 3314 57.5C3347.5 60.5 3384.55 72.7289 3399.5 77.5C3446.5 92.5 3518.5 98.5 3531 100C3543.5 101.5 3588.5 101.5 3612.5 91.5C3636.5 81.5 3656.5 66 3692.5 49C3728.5 32 3777.5 21.5 3799 19.5C3816.2 17.9 3840.83 15.8333 3851 15" stroke={color} strokeOpacity="0.45" strokeWidth="1"/>
            <path className="line_1 line" d="M375 158C402.667 157 465.7 151.9 496.5 139.5C535 124 588.5 90.5001 613 82.0001C637.5 73.5001 668.049 71.8401 711.5 75.0001C739 77 767 77.5 807.5 90.5C821.339 94.9421 876 117.132 909.5 116.5C936 116 967 114 1004.5 94.5001C1042 75.0001 1072 71.5001 1084.5 71.0001C1097 70.5001 1111 65.5001 1208.5 103.5C1286.5 133.9 1380.33 124.833 1417.5 116.5C1430.67 114.833 1466 107.9 1502 93.5002C1547 75.5002 1568 58.5002 1618 57.5002C1668 56.5002 1751 67.0002 1776.5 74.0002C1802 81.0002 1855 93.5002 1883.5 93.5002C1912 93.5002 1976 66.5001 1996.5 63.5001C2017 60.5001 2058.5 50.8001 2118.5 68.0001C2193.5 89.5001 2229 99 2259.5 100C2290 101 2307.5 96 2334 100C2360.5 104 2409 112 2460 128.5C2511 145 2547.5 147 2589 135C2630.5 123 2668.5 102 2714 107.5C2759.5 113 2820 128.5 2851.5 132C2883 135.5 2940 143 2966.5 141.5C2993 140 3031 130 3061 114.5C3091 99 3125 87 3166.5 80.5C3208 74 3256 70.5 3291.5 73C3327 75.5 3361 87.5 3416 109.5C3471 131.5 3491 128 3516 126C3541 124 3590 102 3602.5 96C3615 90 3640.5 79.5 3674 82.5C3707.5 85.5 3744.55 97.7289 3759.5 102.5C3806.5 117.5 3878.5 123.5 3891 125C3903.5 126.5 3948.5 126.5 3972.5 116.5C3996.5 106.5 4016.5 91 4052.5 74C4088.5 57 4137.5 46.5 4159 44.5C4176.2 42.9 4200.83 40.8333 4211 40" stroke={color} strokeOpacity="0.8" strokeWidth="1"/>
            <path className="line_2 line" d="M1 143C28.6667 142 91.7 136.9 122.5 124.5C161 109 214.5 75.5001 239 67.0001C263.5 58.5001 294.049 56.8401 337.5 60.0001C365 62 393 62.5 433.5 75.5C447.339 79.9421 502 102.132 535.5 101.5C562 101 593 99.0002 630.5 79.5001C668 60.0001 698 56.5001 710.5 56.0001C723 55.5001 737 50.5001 834.5 88.5001C912.5 118.9 1006.33 109.833 1043.5 101.5C1056.67 99.8335 1092 92.9002 1128 78.5002C1173 60.5002 1194 43.5002 1244 42.5002C1294 41.5002 1377 52.0002 1402.5 59.0002C1428 66.0002 1481 78.5002 1509.5 78.5002C1538 78.5002 1602 51.5001 1622.5 48.5001C1643 45.5001 1684.5 35.8001 1744.5 53.0001C1819.5 74.5001 1855 84 1885.5 85C1916 86 1933.5 81 1960 85C1986.5 89 2035 97 2086 113.5C2137 130 2173.5 132 2215 120C2256.5 108 2294.5 87 2340 92.5C2385.5 98 2446 113.5 2477.5 117C2509 120.5 2566 128 2592.5 126.5C2619 125 2657 115 2687 99.5C2717 84 2751 72 2792.5 65.5C2834 59 2882 55.5 2917.5 58C2953 60.5 2987 72.5 3042 94.5C3097 116.5 3117 113 3142 111C3167 109 3216 87 3228.5 81C3241 75 3266.5 64.5 3300 67.5C3333.5 70.5 3370.55 82.7289 3385.5 87.5C3432.5 102.5 3504.5 108.5 3517 110C3529.5 111.5 3574.5 111.5 3598.5 101.5C3622.5 91.5 3642.5 76 3678.5 59C3714.5 42 3763.5 31.5 3785 29.5C3802.2 27.9 3826.83 25.8333 3837 25" stroke={color} strokeOpacity="0.55" strokeWidth="1"/>
        </SVG>
    )
}
const transform = (from, to) => keyframes`
    0% {
        transform: translateX(${from}px)
    }
    50% {
        transform: translateX(${to}px)
    }
    100% {
        transform: translateX(${from}px)
    }
`
const SVG = styled.svg`
    .line_11 { 
        animation: ${transform(0, 60)} 45s linear infinite;
    }
    .line_10 { 
        animation: ${transform(0, 110)} 45s linear infinite;
    } 
    .line_9 { 
        animation: ${transform(0, 100)} 45s linear infinite;
    }
    .line_8 { 
        animation: ${transform(0, 140)} 45s linear infinite;
    }
    .line_7 { 
        animation: ${transform(0, 190)} 35s linear infinite;
    } 
    .line_6 { 
        animation: ${transform(0, 240)} 35s linear infinite;
    }
    .line_5 { 
        animation: ${transform(0, 280)} 30s linear infinite;
    }
    .line_4 { 
        animation: ${transform(0, 300)} 30s linear infinite;
    }
    .line_3 { 
        animation: ${transform(0, 340)} 29s linear infinite;
    }
    .line_2 { 
        animation: ${transform(0, 370)} 37s linear infinite;
    }
`