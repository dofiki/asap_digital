import { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import { Group } from "three";
import type { ThreeElements } from "@react-three/fiber";

type Props = ThreeElements["group"];

const ContainerModel = forwardRef<Group, Props>((props, ref) => {
  const { scene } = useGLTF("/models/asap_model.glb");

  return <primitive ref={ref} object={scene} {...props} scale={[3, 3, 3]} />;
});

ContainerModel.displayName = "ContainerModel";

useGLTF.preload("/models/container.glb");

export default ContainerModel;
