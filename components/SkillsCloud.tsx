import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, ThreeEvent } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';

interface CloudProps {
    count: number,
    radius: number
}

interface SkillProps {
    skill: string,
    position: THREE.Vector3
}

type SkillAndPosition = [skill: string, position: THREE.Vector3]
type SkillAndPositions = SkillAndPosition[]

const skills: string[] = ['JavaScript', 'React.js', 'MongoDb', 'MySQL', 'PHP', 'Express.js',
    'Node.js', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Scss',
    'Next.js', 'Git', 'Github', 'Socket.io']

const SkillsCloud: React.FC = () => {
    return (
        <div style={{ fontFamily: "Roboto" }}>
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
                <fog attach="fog" args={['#202025', 0, 80]} />
                <Cloud count={4} radius={20} />
                <OrbitControls autoRotate enableZoom={false} panSpeed={0.3} />
            </Canvas>
        </div>
    )
}

const Cloud: React.FC<CloudProps> = ({ count, radius }) => {
    const skillAndPositions = useMemo<SkillAndPositions>(() => {
        const temp: SkillAndPositions = [];
        const spherical = new THREE.Spherical();
        const phiSpan = Math.PI / (count + 1);
        const thetaSpan = (Math.PI * 2) / count;

        for (let i = 1; i < count + 1; i++) {
            for (let j = 0; j < count; j++) {
                const phi = phiSpan * i;
                const theta = thetaSpan * j;
                const pos = new THREE.Vector3().setFromSpherical(spherical.set(radius, phi, theta));
                const skill = skills[i + (j * count) - 1];
                temp.push([skill, pos]);
            }
        }
        return temp;
    }, [count, radius]);

    return (
        <>
            {
                skillAndPositions.map((skillAndPosition, index) => {
                    const [skill, position] = skillAndPosition;
                    return <Skill key={index} skill={skill} position={position} />
                })
            }
        </>
    )
}

const Skill: React.FC<SkillProps> = ({ skill, position }) => {

    const textRef = useRef<any>();
    const color = new THREE.Color();
    const fontProps = { fontSize: 3, lineHeight: 1, 'material-toneMapped': false }

    useFrame(({ camera }) => {
        // Make the text face the camera
        textRef.current.quaternion.copy(camera.quaternion);
        textRef.current.material.color.lerp(color.set('white'), 0.1);
    })

    return (
        <Text ref={textRef} position={position} {...fontProps}>
            {skill}
        </Text>
    )
}

export default SkillsCloud;