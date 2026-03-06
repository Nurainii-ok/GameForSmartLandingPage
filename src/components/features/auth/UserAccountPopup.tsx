import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function UserAccountPopup({
  isOpen,
  onClose,
}: {
  isOpen?: boolean;
  onClose?: () => void;
}) {
  return (
    <div className={`user-account-popup p-4 ${isOpen ? "open" : ""}`}>
      <div className="account-items d-grid gap-1">
        <div className="user-level-area p-3">
          <div className="user-info d-between">
            <span className="user-name fs-five">David Malan</span>
            <div className="badge d-flex align-items-center">
              <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
              <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
              <i className="ti ti-medal fs-three fs-normal tcp-2"></i>
            </div>
          </div>
          <div className="user-level">
            <span className="level-title tcn-6">Level</span>
            <div className="level-bar my-1">
              <div className="level-progress" style={{ width: "30%" }}></div>
            </div>
          </div>
        </div>
        <Button
          asChild
          variant="ghost"
          className="w-full justify-start account-item p-2 text-white hover-lift text-base font-normal hover:bg-[#1a1a1a] hover:text-white"
          onClick={onClose}
        >
          <Link href="/profile">Lihat Profil</Link>
        </Button>
        <div className="hr-line line3 my-2"></div>
        <Button
          variant="ghost"
          className="w-full justify-start account-item text-danger p-2 hover-lift text-base font-normal hover:bg-[#1a1a1a] hover:text-danger"
          onClick={onClose}
        >
          Keluar
        </Button>
      </div>
    </div>
  );
}
