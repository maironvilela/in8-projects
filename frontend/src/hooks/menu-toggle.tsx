import { createContext, useCallback, useContext, useState } from 'react';

interface MenuToggleContextProps {
  children: React.ReactNode;
}

interface MenuToggleContextState {
  isShowMenu: boolean;
  setToggleMenu: () => void;
}

const MenuToggleContext = createContext<MenuToggleContextState>(
  {} as MenuToggleContextState,
);

const MenuToggleProvider = ({ children }: MenuToggleContextProps) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const setToggleMenu = useCallback(() => {
    setIsShowMenu(!isShowMenu);
  }, [isShowMenu]);

  return (
    <MenuToggleContext.Provider value={{ isShowMenu, setToggleMenu }}>
      {children}
    </MenuToggleContext.Provider>
  );
};

function useMenuToggle(): MenuToggleContextState {
  const context = useContext(MenuToggleContext);
  return context;
}

export { MenuToggleProvider, useMenuToggle };
