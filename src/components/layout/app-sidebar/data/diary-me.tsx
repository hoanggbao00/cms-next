import type { DataSidebar } from "@/types/app-sidebar";

export const dataSidebarDiary: DataSidebar[] = [
  {
    name: "Home",
    pathIcon: (
      <path d="M18 21.7493H13.75V16.4993C13.75 15.5343 12.965 14.7493 12 14.7493C11.035 14.7493 10.25 15.5343 10.25 16.4993V21.7493H6C3.582 21.7493 2.25 20.4173 2.25 17.9993V11.6493C2.25 9.52631 2.83599 8.93328 3.79199 8.14028L9.91199 3.0093C11.121 1.9943 12.879 1.9943 14.088 3.0093L20.208 8.14028C21.164 8.93328 21.75 9.52731 21.75 11.6493V17.9993C21.75 20.4173 20.418 21.7493 18 21.7493ZM15.25 20.2493H18C19.577 20.2493 20.25 19.5763 20.25 17.9993V11.6493C20.25 10.1233 19.998 9.91433 19.251 9.29433L13.125 4.15834C12.473 3.61234 11.527 3.61234 10.875 4.15834L4.74902 9.29433C4.00202 9.91433 3.75 10.1233 3.75 11.6493V17.9993C3.75 19.5763 4.423 20.2493 6 20.2493H8.75V16.4993C8.75 14.7073 10.208 13.2493 12 13.2493C13.792 13.2493 15.25 14.7073 15.25 16.4993V20.2493Z" />
    ),
    path: "/",
  },
  {
    name: "Dashboard",
    pathIcon: (
      <>
        <path d="M21.733 9.769C21.191 5.894 18.106 2.8089 14.231 2.2679C13.737 2.1979 13.234 2.34891 12.853 2.67891C12.469 3.01291 12.249 3.49393 12.249 4.00093V10.009C12.249 10.969 13.03 11.7509 13.991 11.7509H20C20.506 11.7509 20.988 11.5309 21.321 11.1479C21.652 10.7669 21.802 10.265 21.733 9.769ZM20.189 10.1619C20.161 10.1949 20.098 10.25 20 10.25H13.992C13.858 10.25 13.75 10.142 13.75 10.008V3.99995C13.75 3.90095 13.805 3.83801 13.838 3.81001C13.865 3.78601 13.918 3.74995 13.992 3.74995C14.002 3.74995 14.013 3.75091 14.023 3.75191C14.024 3.75191 14.024 3.75191 14.024 3.75191C17.238 4.20091 19.797 6.76091 20.247 9.97591C20.26 10.0659 20.217 10.1309 20.189 10.1619ZM18.044 12.6569H12.093C11.68 12.6569 11.343 12.3209 11.343 11.9069V5.95601C11.343 5.44101 11.114 4.95793 10.715 4.63093C10.324 4.31193 9.81901 4.18294 9.32701 4.28194C7.04501 4.73994 4.996 6.12491 3.705 8.07991C2.4 10.0569 1.95297 12.4489 2.44597 14.8139C3.14097 18.1489 5.84898 20.8569 9.18498 21.5529C9.81298 21.6839 10.443 21.749 11.066 21.749C12.791 21.749 14.466 21.2529 15.919 20.2939C17.874 19.0029 19.259 16.9549 19.717 14.6729C19.816 14.1829 19.69 13.676 19.369 13.285C19.042 12.886 18.559 12.6569 18.044 12.6569ZM15.093 19.0429C13.452 20.1269 11.461 20.4979 9.49199 20.0849C6.73099 19.5089 4.48996 17.268 3.91496 14.508C3.50396 12.537 3.87396 10.548 4.95696 8.90596C6.02896 7.28196 7.729 6.13301 9.622 5.75301C9.634 5.75101 9.64398 5.74995 9.65398 5.74995C9.70198 5.74995 9.73899 5.77095 9.76299 5.79195C9.78699 5.81095 9.84197 5.86601 9.84197 5.95601V11.9069C9.84197 13.1479 10.852 14.1569 12.092 14.1569H18.043C18.133 14.1569 18.188 14.2119 18.207 14.2359C18.231 14.2659 18.258 14.315 18.245 14.379C17.866 16.271 16.717 17.9709 15.093 19.0429Z" />
        <path
          d="M21.733 9.769C21.191 5.894 18.106 2.8089 14.231 2.2679C13.737 2.1979 13.234 2.34891 12.853 2.67891C12.469 3.01291 12.249 3.49393 12.249 4.00093V10.009C12.249 10.969 13.03 11.7509 13.991 11.7509H20C20.506 11.7509 20.988 11.5309 21.321 11.1479C21.652 10.7669 21.802 10.265 21.733 9.769ZM20.189 10.1619C20.161 10.1949 20.098 10.25 20 10.25H13.992C13.858 10.25 13.75 10.142 13.75 10.008V3.99995C13.75 3.90095 13.805 3.83801 13.838 3.81001C13.865 3.78601 13.918 3.74995 13.992 3.74995C14.002 3.74995 14.013 3.75091 14.023 3.75191C14.024 3.75191 14.024 3.75191 14.024 3.75191C17.238 4.20091 19.797 6.76091 20.247 9.97591C20.26 10.0659 20.217 10.1309 20.189 10.1619ZM18.044 12.6569H12.093C11.68 12.6569 11.343 12.3209 11.343 11.9069V5.95601C11.343 5.44101 11.114 4.95793 10.715 4.63093C10.324 4.31193 9.81901 4.18294 9.32701 4.28194C7.04501 4.73994 4.996 6.12491 3.705 8.07991C2.4 10.0569 1.95297 12.4489 2.44597 14.8139C3.14097 18.1489 5.84898 20.8569 9.18498 21.5529C9.81298 21.6839 10.443 21.749 11.066 21.749C12.791 21.749 14.466 21.2529 15.919 20.2939C17.874 19.0029 19.259 16.9549 19.717 14.6729C19.816 14.1829 19.69 13.676 19.369 13.285C19.042 12.886 18.559 12.6569 18.044 12.6569ZM15.093 19.0429C13.452 20.1269 11.461 20.4979 9.49199 20.0849C6.73099 19.5089 4.48996 17.268 3.91496 14.508C3.50396 12.537 3.87396 10.548 4.95696 8.90596C6.02896 7.28196 7.729 6.13301 9.622 5.75301C9.634 5.75101 9.64398 5.74995 9.65398 5.74995C9.70198 5.74995 9.73899 5.77095 9.76299 5.79195C9.78699 5.81095 9.84197 5.86601 9.84197 5.95601V11.9069C9.84197 13.1479 10.852 14.1569 12.092 14.1569H18.043C18.133 14.1569 18.188 14.2119 18.207 14.2359C18.231 14.2659 18.258 14.315 18.245 14.379C17.866 16.271 16.717 17.9709 15.093 19.0429Z"
          fillOpacity="0.2"
        />
        <path
          d="M21.733 9.769C21.191 5.894 18.106 2.8089 14.231 2.2679C13.737 2.1979 13.234 2.34891 12.853 2.67891C12.469 3.01291 12.249 3.49393 12.249 4.00093V10.009C12.249 10.969 13.03 11.7509 13.991 11.7509H20C20.506 11.7509 20.988 11.5309 21.321 11.1479C21.652 10.7669 21.802 10.265 21.733 9.769ZM20.189 10.1619C20.161 10.1949 20.098 10.25 20 10.25H13.992C13.858 10.25 13.75 10.142 13.75 10.008V3.99995C13.75 3.90095 13.805 3.83801 13.838 3.81001C13.865 3.78601 13.918 3.74995 13.992 3.74995C14.002 3.74995 14.013 3.75091 14.023 3.75191C14.024 3.75191 14.024 3.75191 14.024 3.75191C17.238 4.20091 19.797 6.76091 20.247 9.97591C20.26 10.0659 20.217 10.1309 20.189 10.1619ZM18.044 12.6569H12.093C11.68 12.6569 11.343 12.3209 11.343 11.9069V5.95601C11.343 5.44101 11.114 4.95793 10.715 4.63093C10.324 4.31193 9.81901 4.18294 9.32701 4.28194C7.04501 4.73994 4.996 6.12491 3.705 8.07991C2.4 10.0569 1.95297 12.4489 2.44597 14.8139C3.14097 18.1489 5.84898 20.8569 9.18498 21.5529C9.81298 21.6839 10.443 21.749 11.066 21.749C12.791 21.749 14.466 21.2529 15.919 20.2939C17.874 19.0029 19.259 16.9549 19.717 14.6729C19.816 14.1829 19.69 13.676 19.369 13.285C19.042 12.886 18.559 12.6569 18.044 12.6569ZM15.093 19.0429C13.452 20.1269 11.461 20.4979 9.49199 20.0849C6.73099 19.5089 4.48996 17.268 3.91496 14.508C3.50396 12.537 3.87396 10.548 4.95696 8.90596C6.02896 7.28196 7.729 6.13301 9.622 5.75301C9.634 5.75101 9.64398 5.74995 9.65398 5.74995C9.70198 5.74995 9.73899 5.77095 9.76299 5.79195C9.78699 5.81095 9.84197 5.86601 9.84197 5.95601V11.9069C9.84197 13.1479 10.852 14.1569 12.092 14.1569H18.043C18.133 14.1569 18.188 14.2119 18.207 14.2359C18.231 14.2659 18.258 14.315 18.245 14.379C17.866 16.271 16.717 17.9709 15.093 19.0429Z"
          fillOpacity="0.2"
        />
      </>
    ),
    path: "/dashboard",
  },
  {
    name: "Theme",
    pathIcon: (
      <path d="M22.556 9.629C21.59 4.852 17.014 1.25 11.91 1.25C6.03197 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C13.161 22.75 13.987 22.242 14.211 21.39C14.46 20.443 13.862 19.43 12.65 18.746C12.336 18.569 12.168 18.25 12.241 17.971C12.335 17.613 12.914 17.195 14.234 17.195H16.459C17.25 17.195 19.955 17.042 21.576 15.068C22.676 13.728 23.006 11.899 22.556 9.629ZM20.417 14.115C19.213 15.581 17.084 15.695 16.459 15.695H14.234C11.501 15.695 10.907 17.146 10.79 17.59C10.543 18.528 11.005 19.54 11.912 20.052C12.628 20.456 12.794 20.878 12.76 21.009C12.734 21.109 12.48 21.25 11.999 21.25C6.89802 21.25 2.74902 17.101 2.74902 12C2.74902 6.899 6.858 2.75 11.909 2.75C16.313 2.75 20.258 5.83501 21.084 9.92401C21.443 11.729 21.218 13.139 20.417 14.115ZM18.27 10C18.27 10.69 17.71 11.25 17.02 11.25C16.33 11.25 15.765 10.69 15.765 10C15.765 9.31 16.32 8.75 17.01 8.75H17.02C17.71 8.75 18.27 9.31 18.27 10ZM11.27 7C11.27 7.69 10.71 8.25 10.02 8.25C9.33002 8.25 8.76501 7.69 8.76501 7C8.76501 6.31 9.32001 5.75 10.01 5.75H10.02C10.71 5.75 11.27 6.31 11.27 7ZM15.27 7C15.27 7.69 14.71 8.25 14.02 8.25C13.33 8.25 12.765 7.69 12.765 7C12.765 6.31 13.32 5.75 14.01 5.75H14.02C14.71 5.75 15.27 6.31 15.27 7ZM8.27002 10C8.27002 10.69 7.71002 11.25 7.02002 11.25C6.33002 11.25 5.76501 10.69 5.76501 10C5.76501 9.31 6.32001 8.75 7.01001 8.75H7.02002C7.71002 8.75 8.27002 9.31 8.27002 10ZM8.27002 14C8.27002 14.69 7.71002 15.25 7.02002 15.25C6.33002 15.25 5.76501 14.69 5.76501 14C5.76501 13.31 6.32001 12.75 7.01001 12.75H7.02002C7.71002 12.75 8.27002 13.31 8.27002 14Z" />
    ),

    path: "/theme",
  },
  {
    name: "Icon Mood",
    pathIcon: (
      <path d="M12.3677 20.7491C11.7957 20.7491 11.2587 20.475 10.9207 19.997L8.50166 16.57C8.46166 16.513 8.40676 16.4821 8.32576 16.4811L3.98677 16.5461C3.97777 16.5461 3.96767 16.5461 3.95967 16.5461C3.31367 16.5461 2.73267 16.1911 2.43867 15.6151C2.13967 15.0301 2.19972 14.3391 2.59272 13.8111L5.19868 10.323C5.24068 10.267 5.25269 10.1931 5.22969 10.1261L3.88667 6.14408C3.66867 5.49808 3.83372 4.79704 4.31672 4.31504C4.79772 3.83404 5.4957 3.66809 6.1457 3.88609L10.1267 5.22904C10.1947 5.25104 10.2677 5.23906 10.3217 5.19706L13.8087 2.59104C14.3337 2.19704 15.0268 2.13805 15.6118 2.43705C16.1968 2.73505 16.5538 3.32809 16.5448 3.98509L16.4797 8.32609C16.4787 8.39609 16.5117 8.46108 16.5687 8.50108L19.9978 10.922C20.5538 11.314 20.8338 11.9761 20.7268 12.6491C20.6218 13.3231 20.1507 13.869 19.4987 14.073L15.4727 15.333C15.4067 15.354 15.3527 15.4071 15.3317 15.4751L14.0727 19.497C13.8687 20.149 13.3227 20.6201 12.6477 20.7261C12.5557 20.7421 12.4607 20.7491 12.3677 20.7491ZM8.32869 14.9811C8.88569 14.9811 9.40576 15.2501 9.72676 15.7051L12.1447 19.1321C12.2317 19.2551 12.3527 19.2561 12.4157 19.2461C12.4797 19.2361 12.5957 19.1971 12.6417 19.0511L13.9007 15.0281C14.0697 14.4911 14.4897 14.0711 15.0257 13.9031L19.0517 12.643C19.1967 12.598 19.2357 12.4831 19.2447 12.4181C19.2547 12.3551 19.2537 12.2351 19.1317 12.1491L15.7027 9.72807C15.2407 9.40207 14.9707 8.87009 14.9787 8.30509L15.0437 3.96507C15.0457 3.85707 14.9818 3.80206 14.9298 3.77506C14.8768 3.74806 14.7947 3.72908 14.7067 3.79508L11.2197 6.40104C10.7677 6.73804 10.1797 6.83208 9.64766 6.65208L5.66572 5.30906C5.51972 5.26006 5.42266 5.33105 5.37666 5.37705C5.32966 5.42305 5.25967 5.52306 5.30867 5.66606L6.65168 9.64909C6.83068 10.1831 6.73671 10.771 6.40071 11.221L3.79365 14.7091C3.72865 14.7971 3.74676 14.8791 3.77376 14.9331C3.80076 14.9861 3.89572 15.045 3.96272 15.047L8.30269 14.982C8.31169 14.981 8.32069 14.9811 8.32869 14.9811ZM21.5297 21.5291C21.8227 21.2361 21.8227 20.7611 21.5297 20.4681L18.5297 17.4681C18.2367 17.1751 17.7617 17.1751 17.4687 17.4681C17.1757 17.7611 17.1757 18.2361 17.4687 18.5291L20.4687 21.5291C20.6147 21.6751 20.8067 21.7491 20.9987 21.7491C21.1907 21.7491 21.3837 21.6761 21.5297 21.5291Z" />
    ),
    path: "/icon-mood",
  },

  {
    name: "Background",
    pathIcon: (
      <path d="M22.175 5.01549C21.675 4.35149 20.872 3.93851 19.787 3.78551L9.22595 2.30553C8.14095 2.15253 7.26002 2.32753 6.59802 2.82653C5.93402 3.32653 5.52004 4.12951 5.36804 5.21251L5.22095 6.24865H4.66699C2.46399 6.24865 1.25 7.46164 1.25 9.66564V18.3336C1.25 20.5376 2.46399 21.7506 4.66699 21.7506H15.335C17.244 21.7506 18.4071 20.8365 18.6851 19.1605C20.2441 19.0345 21.237 18.0225 21.496 16.2235L22.6949 7.64367C22.8499 6.56267 22.674 5.67849 22.175 5.01549ZM4.66699 7.74865H15.335C16.697 7.74865 17.2531 8.30364 17.2531 9.66564V14.7457L13.83 11.3226C13.188 10.6816 12.146 10.6826 11.507 11.3226L7.33398 15.4957L6.71802 14.8785C6.07602 14.2365 5.03402 14.2385 4.39502 14.8785L2.75 16.5235V9.66564C2.75 8.30364 3.30599 7.74865 4.66699 7.74865ZM15.335 20.2506H4.66699C3.41099 20.2506 2.84699 19.7696 2.76599 18.6276L5.45496 15.9386C5.50896 15.8856 5.60098 15.8846 5.65698 15.9386L6.49304 16.7745C6.95704 17.2395 7.71403 17.2375 8.17603 16.7745L12.568 12.3827C12.624 12.3287 12.716 12.3297 12.77 12.3827L17.2531 16.8656V18.3336C17.2531 19.6956 16.697 20.2506 15.335 20.2506ZM21.21 7.43468L20.011 16.0135C19.866 17.0195 19.4861 17.5265 18.7531 17.6515V9.66564C18.7531 7.46164 17.539 6.24865 15.335 6.24865H6.73499L6.85205 5.4237C6.94805 4.7477 7.165 4.27653 7.5 4.02453C7.832 3.77353 8.34299 3.69364 9.01599 3.79064L19.578 5.27062C20.254 5.36662 20.724 5.58359 20.976 5.91759C21.228 6.25059 21.306 6.76068 21.21 7.43468ZM5.51697 11.5006C5.51697 10.9486 5.95999 10.5006 6.51099 10.5006H6.51904C7.07004 10.5006 7.51697 10.9486 7.51697 11.5006C7.51697 12.0526 7.07004 12.5006 6.51904 12.5006C5.96904 12.5006 5.51697 12.0526 5.51697 11.5006Z" />
    ),
    path: "/background",
    subMenu: [
      {
        name: "Category",
        path: "/background/category",
      },
      {
        name: "Background",
        path: "/background",
      },
    ],
  },

  {
    name: "Sticker",
    pathIcon: (
      <path d="M18.8969 7.43771L18.5778 7.11972C18.5158 7.05672 18.4799 6.97276 18.4799 6.88376V6.43576C18.4799 4.82876 17.1719 3.52072 15.5649 3.52072H15.1169C15.0289 3.52072 14.9428 3.48467 14.8808 3.42367L14.5629 3.1047C13.4279 1.9687 11.5789 1.9667 10.4399 3.1047L10.122 3.4227C10.06 3.4847 9.97394 3.52072 9.88594 3.52072H9.43794C7.83094 3.52072 6.5229 4.82876 6.5229 6.43576V6.88376C6.5229 6.97276 6.488 7.05674 6.425 7.11874L6.10591 7.43869C4.96991 8.57469 4.96991 10.4247 6.10591 11.5617L6.425 11.8797C6.487 11.9427 6.5229 12.0267 6.5229 12.1157V12.5637C6.5229 13.7887 7.28391 14.8347 8.35591 15.2657L6.77998 20.7937C6.70198 21.0687 6.78695 21.3647 6.99995 21.5567C7.21095 21.7477 7.51396 21.8028 7.78096 21.6958L10.549 20.5868C11.809 20.0848 13.1948 20.0848 14.4528 20.5868L17.2228 21.6967C17.3138 21.7327 17.4089 21.7507 17.5019 21.7507C17.6849 21.7507 17.8639 21.6847 18.0039 21.5577C18.2169 21.3657 18.3018 21.0708 18.2238 20.7948L16.6479 15.2667C17.7199 14.8357 18.4809 13.7897 18.4809 12.5647V12.1167C18.4809 12.0277 18.5158 11.9437 18.5788 11.8817L18.8979 11.5627C18.8979 11.5627 18.8979 11.5627 18.8979 11.5617C20.0329 10.4247 20.0329 8.57471 18.8969 7.43771ZM15.009 19.1927C13.394 18.5487 11.6129 18.5477 9.99092 19.1927L8.64082 19.7337L9.85395 15.4787H9.88398C9.97198 15.4787 10.0578 15.5148 10.1198 15.5758L10.4379 15.8947C11.0059 16.4627 11.7519 16.7478 12.4999 16.7478C13.2459 16.7478 13.993 16.4637 14.562 15.8947L14.8798 15.5767C14.9418 15.5147 15.0279 15.4787 15.1159 15.4787H15.1459L16.3588 19.7337L15.009 19.1927ZM17.8369 10.5007L17.518 10.8197C17.171 11.1657 16.9809 11.6267 16.9809 12.1157V12.5637C16.9809 13.3437 16.3459 13.9787 15.5659 13.9787H15.1179C14.6349 13.9787 14.162 14.1747 13.821 14.5167L13.5029 14.8347C12.9679 15.3687 12.0359 15.3687 11.5009 14.8347L11.1828 14.5157C10.8418 14.1747 10.3699 13.9787 9.88594 13.9787H9.43794C8.65794 13.9787 8.0229 13.3437 8.0229 12.5637V12.1157C8.0229 11.6257 7.83303 11.1657 7.48603 10.8187L7.16694 10.5007C6.61594 9.9487 6.61594 9.04975 7.16694 8.49875L7.48603 8.17978C7.83303 7.83378 8.0229 7.37276 8.0229 6.88376V6.43576C8.0229 5.65576 8.65794 5.02072 9.43794 5.02072H9.88594C10.3689 5.02072 10.8418 4.82476 11.1828 4.48276L11.5009 4.16476C12.0359 3.63076 12.9679 3.63076 13.5029 4.16476L13.821 4.48373C14.162 4.82473 14.6339 5.02072 15.1179 5.02072H15.5659C16.3459 5.02072 16.9809 5.65576 16.9809 6.43576V6.88376C16.9809 7.37376 17.171 7.83375 17.518 8.18075L17.8369 8.49875C18.3879 9.05075 18.3879 9.9487 17.8369 10.5007ZM12.5009 6.24972C10.7089 6.24972 9.25093 7.70772 9.25093 9.49972C9.25093 11.2917 10.7089 12.7497 12.5009 12.7497C14.2929 12.7497 15.7509 11.2917 15.7509 9.49972C15.7509 7.70772 14.2929 6.24972 12.5009 6.24972ZM12.5009 11.2497C11.5359 11.2497 10.7509 10.4647 10.7509 9.49972C10.7509 8.53472 11.5359 7.74972 12.5009 7.74972C13.4659 7.74972 14.2509 8.53472 14.2509 9.49972C14.2509 10.4647 13.4659 11.2497 12.5009 11.2497Z" />
    ),
    path: "/sticker",
    subMenu: [
      {
        name: "Category",
        path: "/sticker/category",
      },
      {
        name: "Sticker",
        path: "/sticker",
      },
    ],
  },
  {
    name: "Text Translate",
    pathIcon: (
      <path d="M20.53 8.47L14.53 2.47C14.389 2.329 14.199 2.25 14 2.25H8C5.582 2.25 4.25 3.582 4.25 6V18C4.25 20.418 5.582 21.75 8 21.75H17C19.418 21.75 20.75 20.418 20.75 18V9C20.75 8.801 20.671 8.61 20.53 8.47ZM14.75 4.811L18.189 8.25H17C15.423 8.25 14.75 7.577 14.75 6V4.811ZM17 20.25H8C6.423 20.25 5.75 19.577 5.75 18V6C5.75 4.423 6.423 3.75 8 3.75H13.25V6C13.25 8.418 14.582 9.75 17 9.75H19.25V18C19.25 19.577 18.577 20.25 17 20.25ZM9.75 12C9.75 12.414 9.414 12.75 9 12.75C8.586 12.75 8.25 12.414 8.25 12C8.25 11.586 8.586 11.25 9 11.25C9.414 11.25 9.75 11.586 9.75 12ZM9.75 16C9.75 16.414 9.414 16.75 9 16.75C8.586 16.75 8.25 16.414 8.25 16C8.25 15.586 8.586 15.25 9 15.25C9.414 15.25 9.75 15.586 9.75 16ZM16.75 12C16.75 12.414 16.414 12.75 16 12.75H11.5C11.086 12.75 10.75 12.414 10.75 12C10.75 11.586 11.086 11.25 11.5 11.25H16C16.414 11.25 16.75 11.586 16.75 12ZM16.75 16C16.75 16.414 16.414 16.75 16 16.75H11.5C11.086 16.75 10.75 16.414 10.75 16C10.75 15.586 11.086 15.25 11.5 15.25H16C16.414 15.25 16.75 15.586 16.75 16Z" />
    ),
    path: "/text-translate",
  },

  {
    name: "Template",
    pathIcon: (
      <path d="M19.5 9.25H17.75V6C17.75 3.582 16.418 2.25 14 2.25H6C3.582 2.25 2.25 3.582 2.25 6V18C2.25 20.418 3.582 21.75 6 21.75H19C20.517 21.75 21.75 20.517 21.75 19V11.5C21.75 10.259 20.74 9.25 19.5 9.25ZM6 20.25C4.423 20.25 3.75 19.577 3.75 18V6C3.75 4.423 4.423 3.75 6 3.75H14C15.577 3.75 16.25 4.423 16.25 6V19C16.25 19.45 16.358 19.875 16.551 20.25H6ZM20.25 19C20.25 19.689 19.689 20.25 19 20.25C18.311 20.25 17.75 19.689 17.75 19V10.75H19.5C19.913 10.75 20.25 11.086 20.25 11.5V19ZM14.25 8C14.25 8.414 13.914 8.75 13.5 8.75H9C8.586 8.75 8.25 8.414 8.25 8C8.25 7.586 8.586 7.25 9 7.25H13.5C13.914 7.25 14.25 7.586 14.25 8ZM14.25 12C14.25 12.414 13.914 12.75 13.5 12.75H9C8.586 12.75 8.25 12.414 8.25 12C8.25 11.586 8.586 11.25 9 11.25H13.5C13.914 11.25 14.25 11.586 14.25 12ZM14.25 16C14.25 16.414 13.914 16.75 13.5 16.75H9C8.586 16.75 8.25 16.414 8.25 16C8.25 15.586 8.586 15.25 9 15.25H13.5C13.914 15.25 14.25 15.586 14.25 16ZM7.25 8C7.25 8.414 6.914 8.75 6.5 8.75C6.086 8.75 5.75 8.414 5.75 8C5.75 7.586 6.086 7.25 6.5 7.25C6.914 7.25 7.25 7.586 7.25 8ZM7.25 12C7.25 12.414 6.914 12.75 6.5 12.75C6.086 12.75 5.75 12.414 5.75 12C5.75 11.586 6.086 11.25 6.5 11.25C6.914 11.25 7.25 11.586 7.25 12ZM7.25 16C7.25 16.414 6.914 16.75 6.5 16.75C6.086 16.75 5.75 16.414 5.75 16C5.75 15.586 6.086 15.25 6.5 15.25C6.914 15.25 7.25 15.586 7.25 16Z" />
    ),
    path: "/template",
    subMenu: [
      {
        name: "Category",
        path: "/template/category",
      },
      {
        name: "Template",
        path: "/template",
      },
      {
        name: "Package",
        path: "/template/package",
      },
    ],
  },
  {
    name: "Promotion",
    pathIcon: (
      <path d="M21.5452 7.87097L20.5061 4.79897C20.0171 3.35497 19.4121 2.25098 16.5001 2.25098H7.50013C4.58813 2.25098 3.98312 3.35497 3.49512 4.79897L2.45411 7.87196C1.99311 9.23596 2.33613 10.688 3.25013 11.644V18C3.25013 20.418 4.58213 21.75 7.00013 21.75H17.0001C19.4181 21.75 20.7501 20.418 20.7501 18V11.643C21.6641 10.687 22.0062 9.23497 21.5452 7.87097ZM3.87513 8.35197L4.91614 5.27898C5.26014 4.26098 5.43313 3.74997 7.50013 3.74997H16.5001C18.5671 3.74997 18.7401 4.26098 19.0851 5.27898L20.1242 8.35097C20.4682 9.36497 20.1041 10.455 19.2611 10.942C18.0341 11.65 16.1771 10.944 15.7521 9.74896C15.6461 9.44996 15.3622 9.24997 15.0452 9.24997C15.0442 9.24997 15.0431 9.24997 15.0421 9.24997C14.7241 9.25097 14.4402 9.45297 14.3362 9.75397C14.0402 10.607 13.0361 11.25 12.0001 11.25C10.9641 11.25 9.96007 10.607 9.66407 9.75397C9.56007 9.45297 9.27613 9.25097 8.95814 9.24997C8.67314 9.28397 8.35417 9.44896 8.24817 9.74896C7.94417 10.604 6.93517 11.25 5.89918 11.25C5.48818 11.25 5.08714 11.144 4.73914 10.942C3.89614 10.456 3.53213 9.36597 3.87513 8.35197ZM13.2802 20.25H10.7802V17.5C10.7802 16.811 11.3412 16.25 12.0302 16.25C12.7192 16.25 13.2802 16.811 13.2802 17.5V20.25ZM17.0001 20.25H14.7802V17.5C14.7802 15.983 13.5472 14.75 12.0302 14.75C10.5132 14.75 9.28016 15.983 9.28016 17.5V20.25H7.00013C5.42313 20.25 4.75013 19.577 4.75013 18V12.554C6.22013 12.986 7.95618 12.501 8.95118 11.413C9.69318 12.228 10.8241 12.749 12.0001 12.749C13.1761 12.749 14.3071 12.228 15.0491 11.413C15.7951 12.228 16.9271 12.749 18.1011 12.749C18.4941 12.749 18.8801 12.682 19.2501 12.566V18C19.2501 19.577 18.5771 20.25 17.0001 20.25Z" />
    ),
    path: "/promotion",
  },
];
