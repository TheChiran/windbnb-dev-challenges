import React,{useRef,useEffect} from "react";
import IDrawer from "../../models/IDrawerProps";
import classNames from "classnames";
import '../../assets/styles/drawer.scss';
import { createPortal } from "react-dom";
import useMountTransition from "../hooks/useMountTransition";
import FocusTrap from "focus-trap-react";

function createPortalRoot(){
    const drawerRoot = document.createElement('div');
    drawerRoot.setAttribute('id','drawer-root');
    return drawerRoot;
}

const Drawer = ({isOpen,children,className,onClose,position = 'left',removeWhenClose=true}: IDrawer)=>{
    const portalRootRef = useRef(document.getElementById('drawer-root') || createPortalRoot());
    const bodyRef = useRef(document.querySelector('body'));
    

    const updateBodyOverflowVisibility = (styleValue = '')=>{
        if(bodyRef){
            bodyRef.current!.style.overflow = `${styleValue}`; 
        }
    };

    useEffect(()=>{
        bodyRef.current?.appendChild(portalRootRef.current);
        const portal = portalRootRef.current;
        const bodyEl = bodyRef.current;

        return ()=>{
            portal.remove();
            bodyEl!.style.overflow = ''
        };
    },[]);


    useEffect(()=>{
        const updatePageScroll = ()=>{
            if(isOpen){
                updateBodyOverflowVisibility('hidden');
                return;
            }

            updateBodyOverflowVisibility();
        };

        updatePageScroll();
    },[isOpen]);

    useEffect(() => {
        const onKeyPress = (e) => {
          if (e.key === 'Escape') {
            onClose();
          }
        }
      
        if (isOpen) {
          window.addEventListener('keyup', onKeyPress);
        }
      
        return () => {
          window.removeEventListener('keyup', onKeyPress);
        }
      }, [isOpen, onClose]);

    const isTransitioning = useMountTransition(isOpen,300);

    if(!isTransitioning && removeWhenClose && !isOpen) return null;
    
    return createPortal(
        <FocusTrap active={isOpen}>
            <div aria-hidden={isOpen ? "false" : "true"} 
            className={classNames("drawer-container",{
                open: isOpen,
                className,
                in: isTransitioning,
            })}
        >
            <div 
                className={classNames('drawer',position)}
                role="dialog"
            >
                {children}
            </div>
            <div className="backdrop" onClick={onClose}></div>
        </div>
        </FocusTrap>,
        portalRootRef.current
    );
};

export default Drawer;