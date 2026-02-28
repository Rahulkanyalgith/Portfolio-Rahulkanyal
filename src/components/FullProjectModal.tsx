import {
    Badge,
    Button,
    Group,
    Image,
    Indicator,
    Modal,
    ScrollArea,
    Text,
    useMatches,
  } from "@mantine/core";
  
  const FullProjectModal = (props: any) => {
    const download = useMatches({ xs: "xs", md: "sm", lg: "md", bs: "lg" });
    const techno = useMatches({ xs: "md", sm: "md", md: "lg", bs: "xl" });
    const btn = useMatches({ xs: "xs", sm: "sm", md: "md", lg: "lg" });
    return (
      <Modal.Root
        scrollAreaComponent={ScrollArea.Autosize}
        size="auto"
        centered
        className="font-mono"
        opened={props.opened}
        onClose={props.close}
      >
        <Modal.Overlay className="!backdrop-blur-2xl !backdrop-opacity-40 bg-gradient-to-br from-black/20 to-black/40" />
        <Modal.Content className="!rounded-2xl !bg-gradient-to-br !from-zinc-900 !via-zinc-900 !to-black !border !border-zinc-800/50 !shadow-2xl !shadow-violet-500/10">
          <Modal.Header className="!bg-gradient-to-r !from-zinc-900/80 !to-zinc-900/50 !backdrop-blur-md xs-mx:!p-4 !p-6 !border-b !border-zinc-800/50 !rounded-t-2xl">
            <Modal.Title
              data-autofocus
              className="!text-4xl sm-mx:!text-3xl xs-mx:!text-2xl xsm-mx:!text-xl flex gap-3 xs-mx:gap-2 items-center !font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              {props.title}
              {props.live === true && (
                <Badge
                  className="flex items-center gap-1.5 !bg-gradient-to-r !from-emerald-600 !to-emerald-500 !text-white !font-semibold !border-0"
                  size={download}
                  variant="filled"
                  rightSection={
                    <Indicator
                      color="emerald"
                      position="middle-end"
                      size={10}
                      processing
                    ></Indicator>
                  }
                >
                  ✨ Live
                </Badge>
              )}
            </Modal.Title>
            <Modal.CloseButton
              size="md"
              iconSize="24px"
              className="!bg-zinc-800/50 hover:!bg-red-600/50 !text-zinc-300 hover:!text-white transition-all duration-300 !rounded-lg"
            />
          </Modal.Header>
          <Modal.Body className="!bg-gradient-to-b !from-zinc-900/50 !to-black !backdrop-blur-sm xs-mx:!p-4 !p-6 !pt-6 !border-b !border-zinc-800/50 !rounded-b-2xl">
            {/* Project Image */}
            <div className="relative mb-6 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <Image
                className="!rounded-xl !border !border-zinc-800 !shadow-lg relative"
                src={props.image}
                alt={props.image}
              />
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 xs-mx:gap-1.5 my-5">
              <span className="text-xs text-zinc-500 font-semibold uppercase tracking-widest w-full mb-2">Tech Stack</span>
              {props.technologies.map((tech: string, index: number) => (
                <Badge 
                  key={index} 
                  size={techno} 
                  className="!bg-gradient-to-r !from-cyan-500/20 !to-purple-500/20 !border !border-cyan-500/40 !text-cyan-300 !font-medium hover:!border-cyan-400/60 transition-all duration-300"
                  variant="light"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            {/* Description */}
            <Text
              className="!text-justify !text-lg sm-mx:!text-base xs-mx:!text-sm !leading-relaxed !rounded-xl !bg-zinc-800/30 !p-4 !border !border-zinc-800/50 my-6"
              c="dimmed"
            >
              {props.desc}
            </Text>

            {/* Action Buttons */}
            <Group justify="space-between" mt="md" mb={0} gap="sm">
              <a
                href={props.github}
                target="_blank"
                rel="noreferrer"
                className="!w-[48%] sm-mx:!w-[46%] group/btn"
              >
                <Button
                  variant="outline"
                  size={btn}
                  className="!border-2 !border-cyan-500/40 !text-cyan-300 hover:!border-cyan-400 hover:!bg-cyan-500/10 !transition-all !duration-300 !w-full !font-semibold"
                  fullWidth
                  radius="md"
                >
                  <svg className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 0a10 10 0 0 0-3.16 19.5c.5.08.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.15-1.1-1.46-1.1-1.46-.9-.6.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.52 2.32 1.08 2.89.82.08-.65.34-1.08.62-1.33-2.16-.24-4.43-1.08-4.43-4.8 0-1.06.38-1.92 1-2.6-.1-.25-.44-1.25.1-2.6 0 0 .82-.26 2.7 1 .78-.22 1.62-.33 2.45-.33.83 0 1.67.11 2.45.33 1.88-1.26 2.69-1 2.69-1 .55 1.35.2 2.35.1 2.6.62.68 1 1.54 1 2.6 0 3.72-2.27 4.56-4.44 4.8.35.3.66.89.66 1.8v2.67c0 .26.17.57.68.48A10 10 0 0 0 10 0z" />
                  </svg>
                  View Code
                </Button>
              </a>
              <a
                href={props.link}
                target="_blank"
                rel="noreferrer"
                className="!w-[48%] group/btn"
              >
                <Button
                  size={btn}
                  className="!bg-gradient-to-r !from-violet-600 !via-purple-600 !to-fuchsia-600 !text-white !font-semibold !border-0 hover:!shadow-lg hover:!shadow-purple-500/50 hover:scale-105 active:scale-95 !transition-all !duration-300"
                  fullWidth
                  radius="md"
                >
                  <svg className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.343a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM16.364 15.657a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM11 17a1 1 0 102 0v-1a1 1 0 10-2 0v1zM4.343 15.657l-.707.707a1 1 0 001.414 1.414l.707-.707a1 1 0 00-1.414-1.414zM5 10a1 1 0 01-1-1V8a1 1 0 012 0v1a1 1 0 01-1 1zM4.343 4.343a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414-1.414L4.343 4.343z" />
                  </svg>
                  View Live App
                </Button>
              </a>
            </Group>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    );
  };
  export default FullProjectModal;
  