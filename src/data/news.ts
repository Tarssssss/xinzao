export type SourceType = 'x' | 'podcast' | 'blog'

export type SourceLink = {
  label: string
  url: string
}

export type NewsItem = {
  id: string
  slug: string
  sourceType: SourceType
  creator: string
  role: string
  publishedAt: string
  title: string
  sourceHook: string
  intro: string
  content: string[]
  sourceLinks: SourceLink[]
}

export const newsFeed = {
  feedGeneratedAt: '2026-04-07T07:13:19.780Z',
  curatedAt: '2026-04-08T14:06:30+01:00',
  items: [
    {
      id: '2026-04-07-garry-tan-cowork-vulnerability',
      slug: 'garry-tan-cowork-vulnerability',
      sourceType: 'x',
      creator: 'Garry Tan',
      role: 'CEO at Y Combinator',
      publishedAt: '2026-04-07T05:33:23.000Z',
      title: 'Garry Tan：Claude Cowork 暴露出 AI 编码工作区的文件外流风险',
      sourceHook:
        'Attackers can exfiltrate user files from Cowork by exploiting an unremediated vulnerability in Claude’s coding environment.',
      intro:
        'Y Combinator CEO Garry Tan 转发的一条安全提醒，把注意力拉回到了 AI coding 产品最容易被忽视的一层：当模型被放进真实工作区、拥有文件上下文和执行环境之后，漏洞的影响范围会立刻扩大到用户文件本身。这条信息重要，不是因为它又是一条安全警报，而是它直接点出了 agentic coding 工具从 demo 走向生产后必须补上的安全短板。',
      content: [
        '这条帖子的核心不是泛泛而谈的“AI 也会有安全问题”，而是更具体的工作区风险外溢：如果 Claude 原有编码环境中的未修复漏洞可以延伸到 Cowork，那么产品形态一旦从聊天框升级为带文件权限的协作空间，攻击面就会同步扩张。',
        '对 AI builder 来说，这意味着竞争门槛已经不只是模型质量、补全速度和 agent 成功率。谁来隔离文件权限、如何限制工具调用、怎样处理 prompt injection 和数据 exfiltration，都会变成产品是否能进入真实团队流程的基础条件。',
        '更值得注意的是，这类风险不会只影响单一产品。几乎所有把模型接入本地文件、云文档、终端和协作工作区的 AI coding 工具，都在面对相似的问题。也就是说，安全模型正在从“模型对不对”转向“工作区默认边界够不够硬”。',
        '所以这条新闻真正的信号是：agentic coding 的下一阶段，安全设计不再是上线后的补丁，而会直接决定企业和高价值用户敢不敢把真实内容交给这些系统。',
      ],
      sourceLinks: [
        {
          label: 'Original X post',
          url: 'https://x.com/garrytan/status/2041388847930712399',
        },
      ],
    },
    {
      id: '2026-04-07-peter-yang-agent-first-work',
      slug: 'peter-yang-agent-first-work',
      sourceType: 'x',
      creator: 'Peter Yang',
      role: 'Product at Roblox',
      publishedAt: '2026-04-07T01:45:02.000Z',
      title: 'Peter Yang：AI agent first world 里的五个工作变化',
      sourceHook:
        'I had a wonderful chat ... about the future of work in an AI agent first world.',
      intro:
        'Roblox 产品负责人 Peter Yang 用一条长帖概括了他眼中的 agent-first 工作流：编码会吃掉大部分知识工作，小团队会胜过大组织，任务型应用会被 agent 吞没，而真正稀缺的将是判断力与人生优先级。之所以重要，是因为这不是抽象趋势判断，而是来自一线产品人的具体工作方式变化。',
      content: [
        'Peter Yang 把 agent-first 世界的变化拆成了五层：知识工作的第一版将越来越多地由 AI coding agents 完成，人与人之间的差别会更多体现在最后的打磨、判断和取舍，而不是从零开始搭东西。',
        '他接着把这个变化推到了组织层。过去需要一整串会议、OKR 和跨职能协作的大团队，未来可能会被 2 到 3 人加上一群 agents 的小团队替代。对于 builder 来说，这不是效率优化，而是组织设计和产品节奏的重写。',
        '他还指出，许多“为了完成任务而打开”的应用会被 API 和 agent 吃掉，用户可能不再显式进入这些软件界面，但依然会持续打开能提供内容、社交或娱乐感的产品。也就是说，软件的入口会从 app 切到 agent，而剩下的应用要么足够好玩，要么足够有品牌。',
        '最有意思的一层是 personal agent。Yang 给出的例子不是更快写代码，而是 agent 在散步时提醒他把注意力拉回家庭。这说明下一阶段的 AI 产品竞争，不只是任务完成率，而是能否建立长期上下文、可信度和人与工具之间的情感黏性。',
      ],
      sourceLinks: [
        {
          label: 'Main X thread',
          url: 'https://x.com/petergyang/status/2041331383344443795',
        },
        {
          label: 'Follow-up note on metrics',
          url: 'https://x.com/petergyang/status/2041312589645574578',
        },
      ],
    },
    {
      id: '2026-04-07-aaron-levie-abstraction',
      slug: 'aaron-levie-abstraction',
      sourceType: 'x',
      creator: 'Aaron Levie',
      role: 'CEO at Box',
      publishedAt: '2026-04-07T02:49:28.000Z',
      title: 'Aaron Levie：代理没有消灭工作，只是把工作抬高了一层抽象',
      sourceHook:
        'When you have agents going out and doing work for you, the work just moved up a layer of abstraction.',
      intro:
        'Box CEO Aaron Levie 把 agent 时代的真实工作重新定义为提示、上下文、审阅和整合。他强调，任务越长链，人类在 planning 和 taste 上的责任越重。这条判断重要，因为它反过来解释了为什么企业 AI 的瓶颈并不只是模型能力，而是组织如何管理代理输出。',
      content: [
        'Levie 的核心判断很直接：agent 替你做事之后，工作并没有消失，只是从执行层抬升到了编排层。人要做的事情变成了定义任务、喂上下文、纠偏、验收，再把结果拼回更大的工作流里。',
        '这意味着“更强的 agent”并不会自动把人踢出回路，尤其是在长链任务里反而会让 planning 和 review 更重要。任务越复杂，人类越像 editor、manager 和 producer，而不是彻底退出现场。',
        '对 builder 来说，这个判断很有价值，因为它提示产品设计不要只盯着 agent 的 autonomous completion rate。真正决定体验上限的，往往是任务拆解、上下文注入、过程可见性和最终的审阅接口。',
        '换句话说，下一代 AI builder 产品要卖的不只是自动化，而是更高级的工作台：让用户能把“代理产出”变成“可控的高质量成品”。Levie 这条短帖，几乎可以当作 enterprise agent 产品的设计原则。',
      ],
      sourceLinks: [
        {
          label: 'Original X post',
          url: 'https://x.com/levie/status/2041347596342460439',
        },
      ],
    },
    {
      id: '2026-04-07-thariq-usage-transparency',
      slug: 'thariq-usage-transparency',
      sourceType: 'x',
      creator: 'Thariq',
      role: 'Claude Code at Anthropic',
      publishedAt: '2026-04-07T04:58:57.000Z',
      title: 'Thariq：AI coding 工具的下一战，是“看得见的用量”和未发布功能预告',
      sourceHook:
        'Adam will be showing off a demo of a new feature we have not released yet.',
      intro:
        'Anthropic 工程师 Thariq 同时透露了两件事：一是团队正在研究 MAX 20x 用户的 token 消耗异常，想把 `/usage` 做得更透明；二是会在公开演示里展示一个尚未发布的新功能。对 builder 来说，这说明 AI coding 工具的下一轮竞争，已经从“能不能写”转向“能不能解释资源消耗、建立用户信任”。',
      content: [
        '从 Thariq 征集用户 screenshare 的方式能看出来，Claude Code 团队正在把“为什么额度突然没了”当成一个真实的产品问题，而不是纯技术噪音。AI coding 工具一旦进入付费和高频使用阶段，usage clarity 就会变成留存问题。',
        '另一条帖子的重点则是公开预热未发布功能。这个动作说明产品团队已经在把开发过程的一部分前置到社区里，让核心用户通过直播、演示和反馈提前进入迭代环节。',
        '这两件事组合起来很说明趋势：builder 不只要拼模型能力，还要拼透明度、开发节奏和用户参与感。谁能把“资源消耗”“限制边界”“即将发布什么”讲清楚，谁就更容易获得高价值用户的信任。',
      ],
      sourceLinks: [
        {
          label: 'New feature teaser',
          url: 'https://x.com/trq212/status/2041380183295590471',
        },
        {
          label: 'Usage transparency call-for-feedback',
          url: 'https://x.com/trq212/status/2041252127943877068',
        },
      ],
    },
    {
      id: '2026-04-07-zara-personalized-podcast',
      slug: 'zara-personalized-podcast',
      sourceType: 'x',
      creator: 'Zara Zhang',
      role: 'Follow Builders creator',
      publishedAt: '2026-04-06T18:42:48.000Z',
      title: 'Zara Zhang：个性化播客，正在变成 AI builder 的新界面',
      sourceHook: 'I have been using the Fish Audio API to generate personalized podcasts.',
      intro:
        'Zara Zhang 提到她已经用 Fish Audio API 做出了 personalized podcasts，同时补了一句更偏产品哲学的话：做 AI 产品时，最重要的往往不是加功能，而是先砍功能。这组信息放在一起很有意思，因为它把生成式语音和极简产品策略连到了一条线上。',
      content: [
        '个性化播客这个方向的吸引力，不只是“把文字变成音频”这么简单，而是把内容消费从阅读迁移到陪伴式、可嵌入日常场景的界面里。对 builder 来说，这意味着信息产品的默认出口不一定再是网页或者 app，而可能是一段可以被用户随时点开的声音流。',
        '但 Zara 的另一句提醒更像是产品底层原则：在 AI 能力快速叠加的阶段，最需要问的不是还能加什么，而是哪些 feature 可以直接砍掉。因为 AI 产品很容易变成一个能力杂货铺，最后既不清楚，又不稳定。',
        '把这两条信息放在一起看，逻辑其实很完整：新的界面机会正在出现，但真正能跑出来的产品，往往是最克制、最明确的版本。先把一个内容格式做深，再让 AI 去放大它，而不是先堆满所有可能的功能。',
      ],
      sourceLinks: [
        {
          label: 'Personalized podcast post',
          url: 'https://x.com/zarazhangrui/status/2041225124490420239',
        },
        {
          label: 'Cut features before adding features',
          url: 'https://x.com/zarazhangrui/status/2041196551113179296',
        },
      ],
    },
    {
      id: '2026-04-07-dan-shipper-context-rot',
      slug: 'dan-shipper-context-rot',
      sourceType: 'x',
      creator: 'Dan Shipper',
      role: 'CEO at Every',
      publishedAt: '2026-04-07T00:02:49.000Z',
      title: 'Dan Shipper：只要 context rot 还存在，专业化和层级就不会消失',
      sourceHook:
        'As long as context rot is a thing you are going to need specialization.',
      intro:
        'Every 创始人 Dan Shipper 继续追打一个很多人不愿承认的问题：上下文会腐烂，所以 AI 组织并不会自动扁平化。相反，specialization 甚至 hierarchy 仍然有价值。这一点重要，因为很多 AI builder 正在把“代理越强，组织越扁平”当成默认前提。',
      content: [
        'Shipper 的观点是，AI 并没有神奇到能消灭所有专业分工。只要 context rot 还存在，系统就会在长链任务和多人协作里逐渐偏离最初意图，于是依然需要专业角色去维护边界、标准和判断。',
        '他进一步反驳了“组织不再需要 hierarchy”的乐观叙事。即便中层管理层数会减少，specialization 带来的协调价值依然存在。对 builder 来说，这等于在提醒大家，agent 编排不是组织设计的替代品。',
        '更有意思的是，他自己也在做 AI 编辑流的实验：Every 的实时 AI headline tracker 已经开始每 30 分钟用 Spiral 写一次头条。这说明他不是在否定自动化，而是在区分“哪里该自动化”与“哪里仍然需要专业编辑结构”。',
      ],
      sourceLinks: [
        {
          label: 'Context rot post',
          url: 'https://x.com/danshipper/status/2041305658054574561',
        },
        {
          label: 'Hierarchy post',
          url: 'https://x.com/danshipper/status/2041302485315248595',
        },
        {
          label: 'Realtime AI headline tracker post',
          url: 'https://x.com/danshipper/status/2041273698452136210',
        },
      ],
    },
    {
      id: '2026-04-07-latent-space-mistral-voxtral',
      slug: 'latent-space-mistral-voxtral',
      sourceType: 'podcast',
      creator: 'Latent Space',
      role: 'AI podcast',
      publishedAt: '2026-03-30T19:25:21.000Z',
      title: 'Latent Space：Mistral 把 Voxtral 推向 TTS，音频模型开始进入架构分化期',
      sourceHook:
        'We are releasing Voxtral TTS ... our first audio model that generates speech.',
      intro:
        'Latent Space 最新一期播客围绕 Mistral 的 Voxtral TTS 展开，讨论从语音转写到语音生成的延展、低成本小模型、以及 flow matching 与 neural audio codec 的组合。它之所以值得看，不只是产品更新，而是音频模型的技术路线开始显露出和纯文本模型不同的设计分叉。',
      content: [
        '这期节目的信息密度很高。Mistral 团队把此前的音频理解能力往前推进了一步，正式推出语音生成模型 Voxtral TTS，并强调它是一个约 3B 规模、支持多语言、追求低成本和低延迟的音频模型。',
        '更关键的是他们对架构的描述。团队提到内部尝试过多种方案，最后用了 autoregressive flow matching 加自研 neural audio codec 的组合，把语音编码成语义与声学 token，再交给模型处理。这说明音频模型的“最佳范式”远未像文本模型那样收敛。',
        '播客里还有一个值得 builder 留意的判断：音频理解和音频生成目前还是两个桶，做法并不完全统一。谁能把这两者在产品层拼起来，谁就更可能拥有真正自然的 voice agent 体验。',
        '因此这条 news 的价值，不只是 Mistral 又发了什么，而是它让人更清楚地看到：语音会是 AI builder 领域下一个值得押注的界面层，而且技术堆栈本身还在快速变化。',
      ],
      sourceLinks: [
        {
          label: 'Podcast source',
          url: 'https://www.youtube.com/@LatentSpacePod',
        },
      ],
    },
  ] satisfies NewsItem[],
}
