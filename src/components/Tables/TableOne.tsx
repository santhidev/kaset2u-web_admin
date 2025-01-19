import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/brand/brand-01.svg",
    Username: "Google",
    FullName: "Sundar Pichai",
    Email: "sundar@google.com",
    Phone: 123456789,
    Role: "แอดมิน",
    Status: "ใช้งาน",
    Date: "12/3/2567"
  },
  {
    logo: "/images/brand/brand-02.svg",
    Username: "Twitter",
    FullName: "Elon Musk",
    Email: "elon@twitter.com",
    Phone: 987654321,
    Role: "ผู้ขาย",
    Status: "ไม่ใช้งาน",
    Date: "12/3/2567"
  },
  {
    logo: "/images/brand/brand-03.svg",
    Username: "Github",
    FullName: "Nat Friedman",
    Email: "nat@github.com",
    Phone: 192837465,
    Role: "ผู้ซื้อ",
    Status: "ใช้งาน",
    Date: "12/3/2567"
  },
  {
    logo: "/images/brand/brand-04.svg",
    Username: "Vimeo",
    FullName: "Anjali Sud",
    Email: "anjali@vimeo.com",
    Phone: 564738291,
    Role: "แอดมิน",
    Status: "ไม่ใช้งาน",
    Date: "12/3/2567"
  },
  {
    logo: "/images/brand/brand-05.svg",
    Username: "Facebook",
    FullName: "Mark Zuckerberg",
    Email: "mark@facebook.com",
    Phone: 1029384756,
    Role: "ผู้ขาย",
    Status: "ใช้งาน",
    Date: "12/3/2567"
  },
  {
    logo: "/images/brand/brand-05.svg",
    Username: "Instagram",
    FullName: "Adam Mosseri",
    Email: "adam@instagram.com",
    Phone: 1122334455,
    Role: "ผู้ซื้อ",
    Status: "ไม่ใช้งาน",
    Date: "15/4/2567"
  },
  {
    logo: "/images/brand/brand-05.svg",
    Username: "LinkedIn",
    FullName: "Ryan Roslansky",
    Email: "ryan@linkedin.com",
    Phone: 6677889900,
    Role: "ผู้ขาย",
    Status: "ใช้งาน",
    Date: "20/5/2567"
  },
];


const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        แอคเคาท์
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-8">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ชื่อผู้ใช้
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              ชื่อจริง
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              อีเมล
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              หมายเลขโทรศัพท์
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              บทบาท
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              สถานะบัญชี
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              วันที่สร้าง
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              จัดการ
            </h5>
          </div>
        </div>

        {brandData.map((brand, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-8 ${key === brandData.length - 1
              ? ""
              : "border-b border-stroke dark:border-strokedark"
              }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <Image src={brand.logo} alt="Brand" width={48} height={48} />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {brand.Username}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{brand.FullName}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">${brand.Email}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{brand.Phone}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.Role}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.Status}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{brand.Date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
