import Link from "next/link";
import { SidebarItemWrapper } from "./styles";

interface ISidebarItem {
  name: string;
  href: string;
  active?: boolean;
}

export function SidebarItem({ name, href, active }: ISidebarItem) {
  return (
    <SidebarItemWrapper active={active}>
      <Link href={href}>
        <a>
          <span>{name}</span>
          <svg
            width="10"
            height="17"
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.444191 14.3949L6.33637 8.49239L0.444191 2.58993C-0.148064 1.99664 -0.148064 1.03826 0.444191 0.444966C1.03645 -0.148322 1.99317 -0.148322 2.58542 0.444966L9.55581 7.42752C10.1481 8.02081 10.1481 8.9792 9.55581 9.57248L2.58542 16.555C1.99317 17.1483 1.03645 17.1483 0.444191 16.555C-0.132878 15.9617 -0.148064 14.9881 0.444191 14.3949Z"
              fill={active ? "#FFFFFF" : "#E1E1E6"}
            />
          </svg>
        </a>
      </Link>
    </SidebarItemWrapper>
  );
}
